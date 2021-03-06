
* 原文地址：https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c
* 译文出自：TWNTF
* 译者：Yingjian Li


# React Native 在 Airbnb 中的实践

> 在 2016 年,我们在 React Native 上押了很多赌注.两年后,我们将分享我们的经验和下一步的计划.

_这是 Airbnb 关于 React Native 经验分享和移动端未来计划系列文章的第一篇._

在十年前 Airbnb 刚刚发布的时候,智能手机刚刚起步.从那以后,智能手机已经变成我们日常生活中的一个重要工具了,特别是随着环球旅行的人数越来越多.对于一个为数百万人提供全新旅游形式的团体,一个世界级的移动 App 是必须的.当离开了家之后,移动设备通常是他们主要的或者唯一的通信形式.

从 2008 年最初住进劳施街的三位旅客开始,移动端的年均使用量已经从零增长到了百万级别.我们的 App 可以使租主随时随地地管理房屋, 并在指尖为旅行者提供探索新地点和经历的灵感.

为了追赶发展速度不断加快的移动设备,我们不断扩张我们的团队,现在已经有超过 100 位移动工程师,他们主要负责开发新功能和优化现有功能.

## 下注 React Native

我们持续的评估新技术来提高 Airbnb 上租主和租客的使用体验、高效开发、保持良好开发体验.在 2016 年, 我们对包括 React Native 在内的一系列技术进行了评估.当时, 我们意识到了移动端对我们业务的重要性,但是我们的移动开发工程师太少了,使得我们无法完成我们的目标.因此, 我们开始寻找替代方案.我们的网站主要是用 React 构建的.在 Airbnb 内部,React 是一个高效的,广受欢迎的框架.因此我们将 React Native 视为打开移动端开发的一个机会,同时利用跨平台的特性可以更快速的发布代码.

在我们开始投入到 React Native 开发中时, 就意识到了风险的存在. 我们把一个全新的,快速迭代的,未经验证的平台添加到了我们的代码库中,这有可能会造成分裂而非统一.我们还意识到了要以一种正确的方式来投入到 React Native 开发中.针对 React Native, 我们的目标是:

1.  可以在组织层面提高开发效率.
2.  维持 native 设定的质量标准.
3.  利用 React Native 的跨平台特性,只写一次移动端的代码.
4.  提升开发体验.

## 我们的经历

在过去的两年里, 我们不断认真努力的工作,进行试验,完成了不可思议的工作.我们将 React Native 紧密的集成到了我们的 App 中, 还实现了复杂的 native 功能,如共享元素动画,视差,地理围栏以及与现有 native 基础设施(网络,实验,国际化)的桥接工作.

我们通过 React Native 已经发布了许多重要的产品, 从评论到礼物卡,还包括全新的[Experiences(体验)](https://www.airbnb.com/s/experiences)功能.许多功能都是在我们没有足够的 native 工程师的情况下完成的.

不同的团队在 React Native 方面拥有广泛的经验。React Native 有时表现得十分出色,而有时会造成一些技术上和组织上的问题. 在本系列文章中, 我们详细介绍了我们的经验以及我们接下来的计划。

[第二部分](React-Native-at-Airbnb-The-Technology.md)中, 我们列举了技术方面上 React Native 优点和缺陷.

[第三部分](React-Native-At-Airbnb-Building-A-Cross-Platform-Mobile-Team.md)中, 我们列举了在构建跨平台移动端团队中的组织方面的问题

[第四部分](React-Native-At-Airbnb-Sunsetting-React-Native.md)中, 我们重点展示了我们对 React Native 的看法以及 Airbnb 未来的发展方向.

[第五部分](Whats-Next-for-Mobile-at-Airbnb.md)中, 利用我们在 React Native 上积累的经验,使原生变得更好.
