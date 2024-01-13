"use strict"
window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const header = document.querySelector('header')
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    const menuBtn = document.querySelector(".nav__burger")
    const navigation = document.querySelector(".nav__list")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        navigation.classList.toggle("active")
    })

    const navigationItems = document.querySelectorAll(".nav__link")
    navigationItems.forEach(navItem => {
        navItem.addEventListener("click", () => {
            navigation.classList.remove("active")
            menuBtn.classList.remove("active")
        })
    })
})