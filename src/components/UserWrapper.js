import React from 'react';
import '../assets/css/UserWrapper.css';

export const UserWrapper = (props) => {
  const getUserPhoto = (user) => {
    const { photoURL, email } = user;
    const photoPlaceholder = `https://avatars.dicebear.com/api/initials/${email.charAt(
      0
    )}.svg`;

    return photoURL || photoPlaceholder;
  };

  return (
    <div className='user-wrapper'>
      <img
        className='user-thumb'
        src={getUserPhoto(props.user)}
        alt={props.user.email}
        width='55'
        height='55'
      />

      <div className='user-info'>
        <h2 className='user-name'>
          {props.user.displayName || 'Unknown'}
        </h2>
        <span className='user-status'>{props.user.email}</span>
      </div>
    </div>
  );
};
