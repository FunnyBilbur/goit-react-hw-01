import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.header}>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr className={clsx(css.content, index % 2 !== 0 && css.secondBgColor)} key={item.id}>
              <td className={css.title}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </td>
              <td className={css.title}>{item.amount}</td>
              <td className={css.title}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
