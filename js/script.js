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

    const scrollBtn = document.querySelector(".scrollToTop-btn")
    window.addEventListener("scroll", () => {
        scrollBtn.classList.toggle("active", window.scrollY > 500)
    })
    scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
    window.addEventListener("scroll", () => {
        let reveals = document.querySelectorAll(".reveal")
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight
            let revealTop = reveals[i].getBoundingClientRect().top
            let revealPoint = 50

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add("active")
            }


        }
    })

})