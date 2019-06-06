'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const foundUsers = await User.all()
    return foundUsers
  }

  async store ({ request }) {
    const userDataForInsertingNewOne = request.only([
      'username',
      'email',
      'password'
    ])

    const newCreatedUser = await User.create(userDataForInsertingNewOne)

    return newCreatedUser
  }
}

module.exports = UserController
