import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/Home'
import Production from "../components/Production"
import Expect from "../components/Expect"
import ProductionBsnIritaHub from "../components/ProductionBsnIritaHub"
import ProductionIrita from "../components/ProductionIrita"
import Applications from "../components/Applications"
import ApplicationFinance from "../components/ApplicationFinance"
import ApplicationCooperation from "../components/ApplicationCooperation"
import ApplicationTrust from "../components/ApplicationMultiTrust"
import Partners from "../components/Partners"
import News from "../components/Information"
import About from "../components/About"
import Download from "../components/Download"
Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect:'/home'
            },
            {
                path: '/doc',
                name:Expect,
                component: Expect
            },
            {
                path: '/home',
                name:ProductionIrita,
                component: ProductionIrita
            }

        ]
    })
}

