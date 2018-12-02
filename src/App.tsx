import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {

    render () {
     return (
       <div>
         <Layout>
            <BurgerBuilder />
         </Layout>
       </div>
     );
   }
}
