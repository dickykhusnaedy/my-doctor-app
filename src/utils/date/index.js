import moment from 'moment';

export const getChatTime = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return `${year}-${month}-${date}`;
};

export const convertDate = (date) => {
  moment.locale('id');
  const dateString = date;
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const dateConvert = new Date(dateString.replace(pattern, '$3-$2-$1'));

  return dateConvert;
};
