import {
  string,
  shape,
} from 'prop-types';

export const userSchema = {
  uuid: string,
  firstName: string,
};

export const userShape = shape(userSchema);
