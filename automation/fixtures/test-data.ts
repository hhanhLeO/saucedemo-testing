export const PASSWORD = 'secret_sauce';

export const USERS = {
  standard: 'standard_user',
  lockedOut: 'locked_out_user',
  problem: 'problem_user',
  performanceGlitch: 'performance_glitch_user',
  error: 'error_user',
  visual: 'visual_user',
} as const;

export const CUSTOMER = {
  firstName: 'Hanh',
  lastName: 'Le',
  postalCode: '70000',
};

/** `image` is part of the product image file name, used to check that each image matches its product. */
export const PRODUCTS = {
  backpack: { name: 'Sauce Labs Backpack', price: 29.99, image: 'sauce-backpack' },
  bikeLight: { name: 'Sauce Labs Bike Light', price: 9.99, image: 'bike-light' },
  boltTShirt: { name: 'Sauce Labs Bolt T-Shirt', price: 15.99, image: 'bolt-shirt' },
  fleeceJacket: { name: 'Sauce Labs Fleece Jacket', price: 49.99, image: 'sauce-pullover' },
  onesie: { name: 'Sauce Labs Onesie', price: 7.99, image: 'red-onesie' },
  redTShirt: { name: 'Test.allTheThings() T-Shirt (Red)', price: 15.99, image: 'red-tatt' },
} as const;

export const ALL_PRODUCTS = Object.values(PRODUCTS);

/** Formats a price the way the site shows it, e.g. 7.99 -> "$7.99". */
export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

export const ERRORS = {
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  firstNameRequired: 'Error: First Name is required',
  lastNameRequired: 'Error: Last Name is required',
  postalCodeRequired: 'Error: Postal Code is required',
};
