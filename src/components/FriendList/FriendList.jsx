import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem info={friend} />
          </li>
        ))}
      </ul>
    </>
  );
};
