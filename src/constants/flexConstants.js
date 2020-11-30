export const dataSample1 = {
  title: 'sample 1',
  optionKey: 'flex-direction',
  boxStyle: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  options: [
    { value: 'row', label: 'row' },
    { value: 'row-reverse', label: 'row-reverse' },
    { value: 'column', label: 'column' },
    { value: 'column-reverse', label: 'column-reverse' },
  ],
}

export const dataSample2 = {
  title: 'sample 2',
  optionKey: 'flex-wrap',
  boxStyle: {
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '400px',
  },
  options: [
    { value: 'nowrap', label: 'nowrap' },
    { value: 'wrap', label: 'wrap' },
    { value: 'wrap-reverse', label: 'wrap-reverse' },
  ],
}

export const dataSample3 = {
  title: 'sample 3',
  optionKey: 'justify-content',
  boxStyle: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },
  options: [
    { value: 'flex-start', label: 'flex-start' },
    { value: 'flex-end', label: 'flex-end' },
    { value: 'center', label: 'center' },
    { value: 'space-between', label: 'space-between' },
    { value: 'space-around', label: 'space-around' },
  ],
}

export const dataSample4 = {
  title: 'sample 4',
  optionKey: 'align-items',
  boxStyle: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: '300px',
  },
  itemStyle: {
    // '&:nth-child(3)': {
    //   height: '100px',
    // },
    'min-height': '100px',
    height: 'auto',
  },
  options: [
    { value: 'flex-start', label: 'flex-start' },
    { value: 'flex-end', label: 'flex-end' },
    { value: 'center', label: 'center' },
    { value: 'baseline', label: 'baseline' },
    { value: 'stretch', label: 'stretch' },
  ],
}

export const dataSample5 = {
  title: 'sample 5',
  optionKey: 'align-content',
  boxStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    height: '300px',
  },
  itemStyle: {
    'min-height': '100px',
    height: 'auto',
  },
  options: [
    { value: 'flex-start', label: 'flex-start' },
    { value: 'flex-end', label: 'flex-end' },
    { value: 'center', label: 'center' },
    { value: 'space-between', label: 'space-between' },
    { value: 'space-around', label: 'space-around' },
    { value: 'stretch', label: 'stretch' },
  ],
}
