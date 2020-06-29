import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack'; 
import {createAppContainer} from 'react-navigation'; 

import Lista from './src/Lista';
import Novo from './src/Novo';


const Projeto = createStackNavigator({
  Lista,
  Novo
  });

export default createAppContainer(Projeto);
