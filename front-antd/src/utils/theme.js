import {  createMuiTheme } from 'material-ui/styles';

import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink'

import red from 'material-ui/colors/red'
import purple from 'material-ui/colors/purple'
import deepPurple from 'material-ui/colors/deepPurple'
import indigo from 'material-ui/colors/indigo'
import lightBlue from 'material-ui/colors/lightBlue'
import cyan from 'material-ui/colors/cyan'
import teal from 'material-ui/colors/teal'
import green from 'material-ui/colors/green'
import lightGreen from 'material-ui/colors/lightGreen'
import lime from 'material-ui/colors/lime'
import yellow from 'material-ui/colors/yellow'
import amber from 'material-ui/colors/amber'
import orange from 'material-ui/colors/orange'
import deepOrange from 'material-ui/colors/deepOrange'

import brown from 'material-ui/colors/brown'
import grey from 'material-ui/colors/grey'
import blueGrey from 'material-ui/colors/blueGrey'

module.exports = {
    colors:{
        blue:createMuiTheme({
            palette: {
                primary: blue, // Purple and green play nicely together.
                secondary:blue,
            },
        }),
        pink:createMuiTheme({
            palette: {
                primary:pink, // Purple and green play nicely together.
                secondary:pink,
            },
        }),
        red: createMuiTheme({
            palette: {
                primary: red, // Purple and green play nicely together.
                secondary:red,
            },
        }),
        purple: createMuiTheme({
            palette: {
                primary: purple, // Purple and green play nicely together.
                secondary:purple,
            },
        }),
        deepPurple: createMuiTheme({
            palette: {
                primary: deepPurple, // Purple and green play nicely together.
                secondary:deepPurple,
            },
        }),
        indigo: createMuiTheme({
            palette: {
                primary: indigo, // Purple and green play nicely together.
                secondary:indigo,
            },
        }),
        lightBlue: createMuiTheme({
            palette: {
                primary: lightBlue, // Purple and green play nicely together.
                secondary:lightBlue,
            },
        }),
        cyan: createMuiTheme({
            palette: {
                primary:cyan, // Purple and green play nicely together.
                secondary:cyan,
            },
        }),
        teal: createMuiTheme({
            palette: {
                primary:teal, // Purple and green play nicely together.
                secondary:teal,
            },
        }),
        green: createMuiTheme({
            palette: {
                primary:green, // Purple and green play nicely together.
                secondary:green,
            },
        }),
        lightGreen: createMuiTheme({
            palette: {
                primary: lightGreen, // Purple and green play nicely together.
                secondary:lightGreen,
            },
        }),
        lime: createMuiTheme({
            palette: {
                primary: lime, // Purple and green play nicely together.
                secondary:lime,
            },
        }),
        yellow: createMuiTheme({
            palette: {
                primary: yellow, // Purple and green play nicely together.
                secondary:yellow,
            },
        }),
        amber: createMuiTheme({
            palette: {
                primary:amber, // Purple and green play nicely together.
                secondary:amber,
            },
        }),
        orange: createMuiTheme({
            palette: {
                primary: orange ,// Purple and green play nicely together.
                secondary:orange,
            },
        }),
        deepOrange: createMuiTheme({
            palette: {
                primary: deepOrange, // Purple and green play nicely together.
                secondary:deepOrange,
            },
        }),
        brown: createMuiTheme({
            palette: {
                primary: brown, // Purple and green play nicely together.
                secondary:brown,
            },
        }),
        grey: createMuiTheme({
            palette: {
                primary: grey, // Purple and green play nicely together.
                secondary:grey,
            },
        }),
        blueGrey: createMuiTheme({
            palette: {
                primary: blueGrey, // Purple and green play nicely together.
                secondary:blueGrey,
            },
        })
    },
    canChoice:[
        {name:'blue',color:'#2196F3',Lable:'Blue'},
        {name:'pink',color:'#E91E63',Lable:'Pink'},
        {name:'indigo',color:'#3F51B5',Lable:'Indigo'},
        {name:'red',color:'#F44336',Lable:'Red'},
        {name:'purple',color:'#9C27B0',Lable:'Purple'},
        {name:'cyan',color:'#00BCD4',Lable:'Cyan'},
        {name:'teal',color:'#009688',Lable:'Teal'},
        {name:'green',color:'#4CAF50',Lable:'Green'},
        {name:'yellow',color:'#FFEB3B',Lable:'Yellow'},
        {name:'amber',color:'#FFC107',Lable:'Amber'},
        {name:'orange',color:'#FF9800',Lable:'Orange'},
        {name:'grey',color:'#9E9E9E',Lable:'Grey'},
    ]

}
