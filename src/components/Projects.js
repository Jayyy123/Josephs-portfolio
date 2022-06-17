import psgLanding from '../assets/img/portfolio/psg/landingpage.png'
import psgLogin from '../assets/img/portfolio/psg/loginpage.png'
import psgData from '../assets/img/portfolio/psg/data-page.png'
import psgApi from '../assets/img/portfolio/psg/apis.png'
import psgDataset from '../assets/img/portfolio/psg/dataset-picture.png'
import psgResult from '../assets/img/portfolio/psg/resultpage.png'
import psgModel from '../assets/img/portfolio/psg/machine learning model.png'
import repairsSplash from '../assets/img/portfolio/repairs/splash screen.png'
import repairsSiginIn from '../assets/img/portfolio/repairs/signin screen.png'
import repairsSignUp from '../assets/img/portfolio/repairs/signup screen.png'
import repairsHome from '../assets/img/portfolio/repairs/home screen.png'
import repairsFix from '../assets/img/portfolio/repairs/Fix microwave screen.png'
import repairsCart from '../assets/img/portfolio/repairs/cart screen.png'
import animeJojoAll from '../assets/img/portfolio/animejojo website/allanime.png'
import animeJojoHome from '../assets/img/portfolio/animejojo website/homepage.png'
import animeJojoLogin from '../assets/img/portfolio/animejojo website/login.png'
import animeJojoFeatures from '../assets/img/portfolio/animejojo website/featurespage.png'
import animeJojoSearch from '../assets/img/portfolio/animejojo website/searchbar.png'
import animeJojoSignup from '../assets/img/portfolio/animejojo website/signup.png'
import animeJojoSplash from '../assets/img/portfolio/animejojo website/splashscreen.png'
import animeJojoProfile from '../assets/img/portfolio/animejojo website/userprofile.png'
import animeJojoApi from '../assets/img/portfolio/animejojo website/websiteapi.png'
import cinemaHome from '../assets/img/portfolio/cinema/home.png'
import cinemaSearch from '../assets/img/portfolio/cinema/search.png'
import cinemaSearch1 from '../assets/img/portfolio/cinema/search1.png'
import hearHome from '../assets/img/portfolio/heart/home.png'
import heartAbout from '../assets/img/portfolio/heart/about.png'
import heartLogin from '../assets/img/portfolio/heart/login.png'
import heartPredictor from '../assets/img/portfolio/heart/predictor.png'
import heartDatabase from '../assets/img/portfolio/heart/database.png'
import oms from '../assets/img/portfolio/oms/omsHome.png'
import universallyHome from '../assets/img/portfolio/Universally/home.png'
import universallyLunch from '../assets/img/portfolio/Universally/lunch.png'
import portfolio from '../assets/img/portfolio/portfolio/portfolio home.png'
import aberraLaunch from '../assets/img/portfolio/aberra/launch.png'
import aberraCalendar from '../assets/img/portfolio/aberra/calendar.png'
import aberraNotifications from '../assets/img/portfolio/aberra/notifications.png'
import aberraPermissions from '../assets/img/portfolio/aberra/calendar permissions.png'
import aberraDate from '../assets/img/portfolio/aberra/date picker.png'
import aberraHome from '../assets/img/portfolio/aberra/home.png'
import aberraAdd from '../assets/img/portfolio/aberra/add todo.png'
import janimSplash from '../assets/img/portfolio/janim/splash screen.png'
import janimWelcome from '../assets/img/portfolio/janim/welcome.png'
import janimSign from '../assets/img/portfolio/janim/signuppage.png'
import janimHome from '../assets/img/portfolio/janim/home.png'
import janimMenu from '../assets/img/portfolio/janim/menu.png'
import janimNotes from '../assets/img/portfolio/janim/notes page.png'
import janimAdd from '../assets/img/portfolio/janim/new note.png'
import janimFavourites from '../assets/img/portfolio/janim/favourites.png'
import janimSettings from '../assets/img/portfolio/janim/edit profile settings.png'
import jotitSplash from '../assets/img/portfolio/jotit/splash.png'
import jotitIntro from '../assets/img/portfolio/jotit/intro.png'
import jotitWelcome from '../assets/img/portfolio/jotit/welcome.png'
import jotitHome from '../assets/img/portfolio/jotit/home.png'
import jotitMenu from '../assets/img/portfolio/jotit/menu.png'

const w = {
    'psg':{'gallery':[psgLanding,psgApi,psgData,psgDataset,psgLogin,psgModel,psgResult],
    'title':'A PSG win/lose Predictor website',
    'details':'Built using Python/Django and python data science.'
},
    'animeJojo':{'gallery':[animeJojoHome,animeJojoAll,animeJojoApi,animeJojoFeatures,animeJojoLogin,animeJojoProfile,animeJojoSearch,animeJojoSignup,animeJojoSplash],
    'title':'A fullstack Anime Website.',
    'details':'Built using Python/Django, Django rest framework and external apis.'
},
    'cinema':{'gallery':[cinemaHome,cinemaSearch,cinemaSearch1],
    'title':'A Movie search Website.',
    'details':'Built using React and external apis.'
},
    'heart':{'gallery':[hearHome,heartAbout,heartPredictor,heartLogin,heartDatabase],
    'title':'A Heart Failure Predictor website.',
    'details':'Built using Python/Django and Python Data Science.'
},
    'oms':{'gallery':[oms],
    'title':'An Online Marketing Site.',
    'details':'Built using Python/Django.'
},
    'portfolio':{'gallery':[portfolio],
        'title':'My Portfolio Website.',
        'details':'Built using React.'
    }
}
const a = {
    'repairs':{
        'gallery':[repairsHome,repairsSplash,repairsSiginIn,repairsSignUp,repairsFix,repairsCart],
        'title':'A Repairs App',
        'details':'Built using Flutter'
    },
    'universally':{
        'gallery':[universallyHome,universallyLunch],
        'title':'A Space App',
        'details':'Built using Kotlin and external apis with mvvm architecture.'
    },
    'aberra':{
        'gallery':[aberraLaunch,aberraCalendar,aberraPermissions,aberraNotifications,aberraHome,aberraAdd,aberraDate],
        'title':'A reminder app',
        'details':'Built using Kotlin with mvvm architecture.'
    },
    'janim':{
        'gallery':[janimSplash,janimWelcome,janimSign,janimHome,janimMenu,janimNotes,janimAdd,janimFavourites,janimSettings],
        'title':'A note taking app and a trending movie/series app.',
        'details':'Built using Kotlin, Room database and an external api.'
    },
    'jotit':{
        'gallery':[jotitSplash,jotitIntro,jotitWelcome,jotitHome,jotitMenu],
        'title':'A Todo App.',
        'details':'An app for taking todos. Built using Kotlin and Room.'
    },
}


export const web = [
    w.psg,w.animeJojo,w.cinema,w.heart,w.oms,w.portfolio
]
export const app = [
    a.repairs,a.universally,a.aberra,a.janim,a.jotit
]
export const live = [
    w.cinema,w.portfolio
]
export const all = [
    w.psg,w.animeJojo,w.cinema,w.heart,w.oms,w.portfolio,a.repairs,a.universally,a.aberra,a.janim,a.jotit
]