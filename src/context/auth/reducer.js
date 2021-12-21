import React, { createContext, useReducer, useContext } from 'react'

export const actionType = {
	REQ_LOGIN_WITH_GOOGLE: 'REQ_LOGIN_WITH_GOOGLE',
	REQ_LOGIN_WITH_EMAIL: 'REQ_LOGIN_WITH_EMAIL',
	ERR_LOGIN: 'ERR_LOGIN',
	SUCC_LOGIN: 'SUCC_LOGIN',
}

const AuthContext = createContext()

const initState = {
	currentUser: null,
	isLogin: false,
	loginError: null,
}

function useReducer(state, action) {
	switch (action.type) {
		case actionType.REQ_LOGIN_WITH_GOOGLE: {
			return {
				...state,
				isLogin: true,
				loginError: null,
			}
		}
		case actionType.REQ_LOGIN_WITH_EMAIL: {
		}
		case actionType.ERR_LOGIN: {
		}
		case actionType.SUCC_LOGIN: {
		}
		default: {
			return state
		}
	}
}

function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initState)
	const { currentUser, isLogin, loginError } = state

	const value = {
		state, 
		loginWithGoogle: ()=> {},
		loginWithEmail: ()=>{}
	}
	return (
		<AuthContext.Provider value={}>{children}</AuthContext.Provider>
	)
}
