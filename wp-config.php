<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jcc_commerce' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}ZE@;@ V/J_q}HZeX$qWwkz;=sD*|tLD#1x|#xZ;73?O=vw3;3aA8em8^,]66lP~' );
define( 'SECURE_AUTH_KEY',  'NaO{dmyS}WMfWihHMP0tUGy:Hx}]Q+e;X%Wu2;u%bH0yEhKk7`C7BzsLqWI@<iG+' );
define( 'LOGGED_IN_KEY',    'LARTZd1t:G0dE$8/H;2T}Xh}9WzbGPGmkaHCqV_{.m-B2t[D;kQ=i_`t|]nTX?Q@' );
define( 'NONCE_KEY',        'R@6p,VIpC;SH>|}3#xFW41O6kkHTYZ2j2Lf$a<kko3;Av&@%wG{+5(MM$lC?rJaf' );
define( 'AUTH_SALT',        'HYyf4!Z(8kBsy%$ks&MQl~A/;7^eX1Qm.Fu ^#(D7l3SL5J#R%QT&%Y|#lrLqjY@' );
define( 'SECURE_AUTH_SALT', ';g^7D7Q]CGqOhtWb^x:_JP7{miBtHf=kg%}^-[Qs0b%_#kiqfkBDox|BZ}@q}0QU' );
define( 'LOGGED_IN_SALT',   '3Mtc(H*E1q#~pS:Ee$f(Dm]zlcO*z9Ei*&2D>VuBtI|z[%QMYD>nC#Z9b4 -vbvo' );
define( 'NONCE_SALT',       '!8bD!7bun#4 L%=s+7a4tq[Gka(~X{!0Z#ex-{12@;=v>qBNxs%DIyvc`4`Nfl_x' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
