import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ThemeSwitcher from './ThemeSwitcher';
import CardSwitcher from './CardSwitcher';
import fetchData from '../CardDataUtils'
import {ReactComponent as Icon }from '../images/loading.svg';

// EmptyBoxコンポーネントを実装してローディングイメージを中心に表示しましょう。
const EmptyBox = () => {
  return <div className="empty"><Icon /></div>
}

export default class extends Component {
  state = {
    theme: 'light',
    chosenId: 1,
    isLoading: true,
    loadedOnce: false,
  }

  componentDidMount() {
    // データを取得してstateに反映します。
    fetchData().then((data) => {
      this.setState({
        data,
        isLoading: false,
        loadedOnce: true
      })
    })
  }

  onSwitchTheme = (theme, e = null) => {
    if (e) e.preventDefault();
    this.setState({ theme })
  }

  onSwitchCard = (id, e = null) => {
    if (e) e.preventDefault();
    // 与えられたidをもとに必要ならデータを再取得します。
    if (this.state.chosenId !== id) {
      this.setState({
        chosenId: id,
        isLoading: true,
        loadedOnce:false
      })
    }
    fetchData(id).then((data) => {
      this.setState({
        data,
        isLoading: false,
        loadedOnce: true
      })
    })
  }

  render() {
    const { 
      theme, 
      chosenId,
      isLoading,
      data,
      loadedOnce
    } = this.state;
    //console.log(loadedOnce)
    let instaCardClass = "insta-card";
    if (theme === 'dark') {
      instaCardClass = "insta-card insta-card-dark"
    }
    if (isLoading) {
      return <EmptyBox />
    }
    let articlePart = (
      <article className={instaCardClass}>
        <Header theme={theme} 
                data={data}/>
        <Body theme={theme} data={data} loadedOnce={loadedOnce}/>
      </article>
    );
    return (
      <div className="card-wrapper">
        <div style={{ marginBottom: 7 }}>
          <p>- テーマを選択してください。</p>
          <ThemeSwitcher 
            theme={theme}
            switchTheme={this.onSwitchTheme} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <p>- 表示するカードを選択してください。</p>
          <CardSwitcher 
            chosenId={chosenId}
            switchCard={this.onSwitchCard} />
        </div>
        {articlePart}
      </div>
    );
  }
}