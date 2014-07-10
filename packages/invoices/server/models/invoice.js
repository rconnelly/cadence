'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  //autoIncrement = require('mongoose-auto-increment'),
  timestamps = require('mongoose-times');

/**
 * Validations
 */

/**
 * User Schema
 */
var InvoiceSchema = new Schema({
  invoiceNumber: {
    type: Number
  }
});

/**
 * Plugins
 */

mongoose.model('Invoice', InvoiceSchema);

InvoiceSchema.plugin(timestamps, {created: 'createdAt', lastUpdated: 'updatedAt'} );
//InvoiceSchema.plugin(autoIncrement.plugin, { model: 'Invoice', field: 'invoiceNumber' });