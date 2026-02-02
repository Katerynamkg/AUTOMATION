const MainController = require('./MainController');
let { token } = require('./token');

class UserController extends MainController {
	constructor() {
		super();
		// this.token = null;
		this.userId = null;
	}

	async login(username, password) {
		const response = await this.axiosInstance.post(
			'Account/v1/Authorized',
			{
				userName: username,
				password: password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		return response;
	}

    async getUserId(username, password){
        	const response = await this.axiosInstance.post('Account/v1/User', {
			userName: username,
			password: password,
		});
            this.userId = response.data.userId;
            console.log('USER ID (from test):', this.userId);
            return this.userId

    }

	async getToken(username, password) {
		const response = await this.axiosInstance.post('Account/v1/GenerateToken', {
			userName: username,
			password: password,
		});
        token = response.data.token
        return this.token
	}
    saveToken(){
        return this.token
    }

	saveUserId() {
		return this.userId;
	}
}

module.exports = new UserController();

