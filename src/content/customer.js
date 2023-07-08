

import serviceimg1 from './../assets/images/sri-lanka-KSa66AYiqnk-unsplash _resize.jpg'
import serviceimg2 from './../assets/images/dan-cristian-padure-mIyZDPhuyY0-unsplash_resize.jpg'
import Servicesimg3 from './../assets/images/peter-wendt--r5KSMkyoSc-unsplash_resize.jpg'
import textoverImg from './../assets/images/jake-gard-CetB-bTDBtY-unsplash_resize.jpg'

export const content = {
  nav: [{
    name: 'No Shop',
    path: '/' },{
    name: 'Products',
    path: '/products' },{
    name: 'Cart',
    path: '/cart' }],
  home : {
    banner : {
      img : 'img.png',
      title: 'title',
      subtitle: 'subtitle',
      body : 'body' },
    services: {
      title:'Services',
      subtitle: 'What we do',
      items: [{
      img: serviceimg1,
      alt: 'fresh vegetables on the ground',
      content: 'Help activation of local community' },{
      img: serviceimg2,
      alt: 'fruits and vegetables on the table',
      content: 'Delivery of local fresh fruits and vegetables without wait time' },{
      img: Servicesimg3,
      alt: 'pile of green onions and carrots',
      content: 'Give back benefits to the community' }]},
    txtOverPic: {
      title: 'Meet us better',
      subtitle: 'Our Organic Farm in Numbers',
      bgImg: textoverImg,
      items: [{
        name:'370',
        content : 'households per month' },{
        name:'23',
        content : 'experts working' },{
        name:'100%',
        content : 'satisfied customers'}]},
    sideBySide: {
      img: textoverImg,
      title : 'Why You\'ll Love Us',
      subtitle: 'There is never been a better time to eat organic. Organic means working with nature. We’re coming into a fantastic time for European food.',
      items: [
        'Delicious',
        'Ethical',
        'Sustainable',
        'Seasonal',
        'Free delivery']},
    rating: [{
      id: 1,
      title: 'Excellent',
      star: 4,
      writer: 'Fiona Elle',
      content: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },{
      id: 2,
      title: 'Fantastic',
      star: 5,
      writer: 'Elizabeth Banker',
      content: 'ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },{
      id: 3,
      title: 'Phenomenal',
      star: 5,
      writer: 'Anna Holmes',
      content: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' 
    }]
    },
    footer:{
      title: 'Fllow Us',
      socialMedia :[{
        name: 'facebook',
        img: 'img.png'
      },{
        name: 'instagram',
        img: 'img.png'
      },{
        name: 'twitter',
        img: 'img.png'
      },{
        name: 'youtube',
        img: 'img.png'
      }]},
}