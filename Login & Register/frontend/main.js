import './style.scss'
import * as animation from './src/animation'
import axios from 'axios'

const loginBtn = document.querySelector('.login-btn')
const registerBtn = document.querySelector('.register-btn')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const new_username = document.querySelector('#new-username')
const new_password_1 = document.querySelector('#reg-password-1')
const new_password_2 = document.querySelector('#reg-password-2')
const signOutBtn = document.querySelector('#sign-out')

// 添加监听事件
loginBtn.addEventListener('click', login)
registerBtn.addEventListener('click', register)
signOutBtn.addEventListener('click', signOut)

// 定义监听事件。因为涉及数据交互所以用async
async function login(event) {
    event.preventDefault()
}

async function register(event) {
    event.preventDefault()
}

async function signOut(event) {
    event.preventDefault()
}

const toRegisterBtn = document.querySelector('.to-register-btn')
const toLoginBtn = document.querySelector('.to-login-btn')

toRegisterBtn.addEventListener('click', showRegister)
toLoginBtn.addEventListener('click', showLogin)

function showRegister(event) {
    console.log('按了toRegisterBtn')

    event.preventDefault()
    animation.LoginToRegister()
}

function showLogin(event) {
    event.preventDefault()
    animation.RegisterToLogin()
}