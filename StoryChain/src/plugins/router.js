import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/Home';
import SignIn from './../components/SignIn';
import SignUp from './../components/SignUp';
import Dashboard from './../components/Dashboard';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/', name: 'home', component: Home,
    },
    {
        path: '/sign-in', name: 'sign-in', component: SignIn,
    },
    {
        path: '/sign-up', name: 'sign-up', component: SignUp,
    },
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard,
    },
        //{
        //    path: '/post/:id', name: 'post', component: Post, props: true,
        //}
    ]
});
