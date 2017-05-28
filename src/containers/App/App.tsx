import * as React from 'react';
import './style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlueA700 } from 'material-ui/styles/colors';

import * as style from './style';
// import { bindActionCreators } from 'redux';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import Weather from '../Weather';

export namespace App {
  // Props from the mapStateToProps method
  export interface StateProps {

  }

  // Props from the mapDispatchToProps method
  export interface DispatchProps {
  }

  export interface OwnProps {
    id: string;
  }
  export type Props = StateProps & OwnProps & DispatchProps & RouteComponentProps<void>;
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlueA700,
  },
  appBar: {
    height: 50,
  },
});

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, {}> {

  componentDidMount() {
  }

  render() {
    const { children } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={style.root}>
          <div className={style.cardContainer}>
            <Weather />
          </div>
          {children}
        </div>
      </MuiThemeProvider>

    );
  }
}

function mapStateToProps(state: RootState): App.StateProps {
  return {

  };
}

function mapDispatchToProps(dispatch): App.DispatchProps {
  return {
  };
}

