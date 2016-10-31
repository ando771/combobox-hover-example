import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import {
  Combobox,
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

const App = () => <div>
  <div className={styles.block}>
    <h3>Наведи чтобы выбрать значение</h3>
    <div className={styles.hovered}>
      <Combobox
        source={getSource}
        renderItem={foundItem}
        placeholder="Выберите значение"
        openButton
      />
    </div>
  </div>

</div>

export default App;
