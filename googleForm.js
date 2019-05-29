// ==UserScript==
// @name         2019年度前期特別演習感想 自分の情報自動入力スクリプト
// @namespace    http://macinjoke.com
// @version      1.0
// @description めんどいことはJavaScriptに
// @author       macinjoke
// @match        https://docs.google.com/forms/*/1FAIpQLSfLSZZXG4z6rC9JqlLiyB7ljFhKF_CgvZMRLmskH9jhci_9yg/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

;(function() {
  'use strict'
  const MY_ID = '18fmi999' // 自分の学籍番号
  const MY_NAME = '電大太郎' // 自分の氏名

  const s = $('input.quantumWizTextinputPaperinputInput')

  s[0].value = MY_ID
  s[1].value = MY_NAME
})()
