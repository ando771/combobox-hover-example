import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import {
  ComboBox,
  Modal,
} from 'ui';

import styles from './App.less';

const values = [
  'Первый вариант',
  'Второй вариант',
  'Третий вариант',
  'Четвертый вариант',
  'Пятый вариант',
  'Шестой вариант',
  'Седьмой вариант',
  'Восьмой вариант',
  'Девятый вариант',
  'Десятый вариант',
]

function getSource(input) {
  const inputInLowerCase = input.toLowerCase();
	return Promise.resolve({
		values: _.filter(values, (d, i) => _.includes(d, inputInLowerCase))
	})
}

function foundItem(item) {
  return <span>{item}</span>;
}

export default class App extends React.Component {
  state = {
    value: ''
  }

  render(){
    return <div className={styles.main}>
      <h3>Пример:</h3>
      <p>Combobox появляется только при hover. Но когда курсор находится над меню Combobox`а, input пропадает.</p>
      <p>Также, при прокрутке меню, оно съезжает в левый верхний угол страницы.</p>
      <div className={styles.block}>
        <span className={styles.text}>{this.state.value || 'Значение не выбрано' }</span>
        <div className={styles.combobox}>
          <ComboBox
            value={this.state.value}
            onChange={({target: {value}}) => this.setState({value})}
            renderValue={(value, info) => <span>{value}</span>}
            source={getSource}
            renderItem={foundItem}
            placeholder="Выберите значение"
            openButton
          />
        </div>
      </div>
    </div>
  }
}
