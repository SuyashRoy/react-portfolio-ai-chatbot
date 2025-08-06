import clsx from 'clsx';

export const useStyles = (isActive: boolean) => {
  return {
    root: clsx(
      'p-4 rounded shadow-md',
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
    ),
    button: 'mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
  };
};

// export default function MyComponent() {
//   const styles = useStyles(true);

//   return (
//     <div className={styles.root}>
//       Hello
//       <button className={styles.button}>Click</button>
//     </div>
//   );
// }
