import css from './FriendListItem.module.css';

export const FriendListItem = ({ info }) => {
  return (
    <>
      <div>
        <img src={info.avatar} alt="Avatar" width="48" />
        <p>{info.name}</p>
        <p className={info.isOnline ? css.online : css.offline}>
          {info.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
