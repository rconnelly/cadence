'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Invoice = mongoose.model('Invoice');

//Globals
var user, user2;
var invoice, invoice2;

//The tests
describe('<Unit Test>', function() {
    describe('Model User:', function() {
        before(function(done) {
            invoice = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password',
                provider: 'local'
            });
            user2 = new User(user);

            done();
        });

        describe('Method Save', function() {
            it('should begin without the test user', function(done) {
                User.find({ email: 'test@test.com' }, function(err, users) {
                    users.should.have.length(0);
                    done();
                });
            });

            it('should be able to save without problems', function(done) {
                user.save(done);
            });

            it('should fail to save an existing user again', function(done) {
                user.save();
                return user2.save(function(err) {
                    should.exist(err);
                    done();
                });
            });

            it('should show an error when try to save without name', function(done) {
                user.name = '';
                return user.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        after(function(done) {
            user.remove();
            done();
        });
    });

  describe('Model Invoice:', function() {
    before(function(done) {
      invoice = new Invoice({
      });
      invoice2 = new Invoice(invoice);

      done();
    });

    describe('Method Save', function() {
      it('should begin without the test user', function(done) {
        User.find({ email: 'test@test.com' }, function(err, users) {
          users.should.have.length(0);
          done();
        });
      });

      it('should be able to save without problems', function(done) {
        user.save(done);
      });

      it('should fail to save an existing user again', function(done) {
        user.save();
        return user2.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should show an error when try to save without name', function(done) {
        user.name = '';
        return user.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });

    after(function(done) {
      user.remove();
      done();
    });
  });
});
