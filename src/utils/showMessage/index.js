import {showMessage} from 'react-native-flash-message';
import {colors} from '../../utils';

export const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.message.error,
    color: colors.white,
  });
};

export const showWarning = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.warning,
    color: colors.white,
  });
};

export const showSuccess = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary,
    color: colors.white,
  });
};
