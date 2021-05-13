import Vue from 'vue';
import Router from 'vue-router';
import Home from './../components/Home';
import SignIn from './../components/SignIn';
import SignUp from './../components/SignUp';
import ForgotPassword from './../components/ForgotPassword';
import ChangePassword from './../components/ChangePassword';
import Dashboard from './../components/Dashboard';
import CreateStory from './../components/CreateStory';
import Play from './../components/Play';
import Story from './../components/Story';
import Scene from './../components/Scene';

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
        path: '/forgot-password', name: 'forgot-password', component: ForgotPassword,
    },
    {
        path: '/change-password/:userId/:code', name: 'change-password', component: ChangePassword, props: true,
    },
    {
        path: '/sign-out', name: 'sign-out', component: Home,
    },
    {
        path: '/account', name: 'account', component: Dashboard,
    },
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard,
    },
    {
        path: '/create', name: 'create', component: CreateStory,
    },
    {
        path: '/play', name: 'play', component: Play,
    },
    {
        path: '/story/:storyId', name: 'story', component: Story,
    },
    {
        path: '/story/:storyId/scene/:sceneId', name: 'scene', component: Scene,
    }
    ]
});
