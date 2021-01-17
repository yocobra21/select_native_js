import { Select } from '/select/select';
import './select/styles.scss';

const select = new Select('#select', {
  placeholder: 'take element',
  selectedId: '2',
  data: [
    { id: '1', value: 'React' },
    { id: '2', value: 'Vue' },
    { id: '3', value: 'Nodejs' },
    { id: '4', value: 'Next' },
  ],
  onSelect(item) {
    console.log(item);
  },
});

window.s = select;
