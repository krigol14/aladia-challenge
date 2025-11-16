/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateway/src/app.module.ts":
/*!****************************************!*\
  !*** ./apps/gateway/src/app.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aladia_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aladia/config */ "@aladia/config");
/* harmony import */ var _aladia_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aladia_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./apps/gateway/src/auth/auth.module.ts");
/* harmony import */ var _networking_networking_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./networking/networking.module */ "./apps/gateway/src/networking/networking.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_1__.ConfigModule.forRoot({
                load: [_aladia_config__WEBPACK_IMPORTED_MODULE_3__.configuration],
                isGlobal: true,
            }),
            nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.LoggerModule.forRoot({
                pinoHttp: {
                    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
                    transport: process.env.NODE_ENV !== 'production'
                        ? {
                            target: 'pino-pretty',
                            options: {
                                singleLine: true,
                                colorize: true,
                            },
                        }
                        : undefined,
                },
            }),
            _networking_networking_module__WEBPACK_IMPORTED_MODULE_5__.NetworkingModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule,
        ],
    })
], AppModule);



/***/ }),

/***/ "./apps/gateway/src/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/gateway/src/auth/auth.controller.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthController: () => (/* binding */ AuthController)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _networking_networking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../networking/networking.service */ "./apps/gateway/src/networking/networking.service.ts");
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aladia/common */ "@aladia/common");
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aladia_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _guards_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/jwt-auth.guard */ "./apps/gateway/src/auth/guards/jwt-auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;






let AuthController = class AuthController {
    networkingService;
    logger;
    constructor(networkingService, logger) {
        this.networkingService = networkingService;
        this.logger = logger;
    }
    async register(registerUserDto) {
        this.logger.log({ email: registerUserDto.email }, 'Registration request received');
        const user = await this.networkingService.registerUser(registerUserDto);
        this.logger.log({ userId: user.id, email: user.email }, 'User registered successfully');
        return user;
    }
    async login(loginUserDto) {
        this.logger.log({ email: loginUserDto.email }, 'Login request received');
        const result = await this.networkingService.login(loginUserDto);
        this.logger.log({ userId: result.user.id, email: result.user.email }, 'User logged in successfully');
        return result;
    }
    async getAllUsers() {
        this.logger.log('Get all users request received');
        const users = await this.networkingService.getAllUsers();
        this.logger.log({ count: users.length }, 'Retrieved all users');
        return users;
    }
};
__decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Post)('register'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.HttpCode)(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.CREATED),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiOperation)({ summary: 'Register a new user' }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiBody)({ type: _aladia_common__WEBPACK_IMPORTED_MODULE_4__.RegisterUserDto }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({
        status: 201,
        description: 'User successfully registered',
        type: _aladia_common__WEBPACK_IMPORTED_MODULE_4__.UserResponseDto,
    }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({ status: 400, description: 'Bad request - validation failed' }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({ status: 409, description: 'Conflict - user already exists' }),
    __param(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _aladia_common__WEBPACK_IMPORTED_MODULE_4__.RegisterUserDto !== "undefined" && _aladia_common__WEBPACK_IMPORTED_MODULE_4__.RegisterUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "register", null);
__decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Post)('login'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.HttpCode)(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.OK),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiOperation)({ summary: 'Login user' }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiBody)({ type: _aladia_common__WEBPACK_IMPORTED_MODULE_4__.LoginUserDto }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({
        status: 200,
        description: 'User successfully logged in',
        type: _aladia_common__WEBPACK_IMPORTED_MODULE_4__.LoginResponseDto,
    }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({
        status: 401,
        description: 'Unauthorized - invalid credentials',
    }),
    __param(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof _aladia_common__WEBPACK_IMPORTED_MODULE_4__.LoginUserDto !== "undefined" && _aladia_common__WEBPACK_IMPORTED_MODULE_4__.LoginUserDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Get)('users'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.UseGuards)(_guards_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_5__.JwtAuthGuard),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiBearerAuth)(),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiOperation)({ summary: 'Get all users (requires authentication)' }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({
        status: 200,
        description: 'List of all users',
        type: [_aladia_common__WEBPACK_IMPORTED_MODULE_4__.UserResponseDto],
    }),
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiResponse)({ status: 401, description: 'Unauthorized - token required' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "getAllUsers", null);
AuthController = __decorate([
    (0,_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__.ApiTags)('auth'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof _networking_networking_service__WEBPACK_IMPORTED_MODULE_3__.NetworkingService !== "undefined" && _networking_networking_service__WEBPACK_IMPORTED_MODULE_3__.NetworkingService) === "function" ? _a : Object, typeof (_b = typeof nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.Logger !== "undefined" && nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.Logger) === "function" ? _b : Object])
], AuthController);



/***/ }),

/***/ "./apps/gateway/src/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/gateway/src/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.controller */ "./apps/gateway/src/auth/auth.controller.ts");
/* harmony import */ var _networking_networking_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../networking/networking.module */ "./apps/gateway/src/networking/networking.module.ts");
/* harmony import */ var _strategies_jwt_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strategies/jwt.strategy */ "./apps/gateway/src/auth/strategies/jwt.strategy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
        imports: [
            _networking_networking_module__WEBPACK_IMPORTED_MODULE_5__.NetworkingModule,
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_1__.PassportModule,
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtModule.registerAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_3__.ConfigModule],
                useFactory: (configService) => {
                    const expiresIn = (configService.get('jwt.expiresIn') ||
                        '1d');
                    return {
                        secret: configService.get('jwt.secret') || '',
                        signOptions: { expiresIn },
                    };
                },
                inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService],
            }),
        ],
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_4__.AuthController],
        providers: [_strategies_jwt_strategy__WEBPACK_IMPORTED_MODULE_6__.JwtStrategy],
    })
], AuthModule);



/***/ }),

/***/ "./apps/gateway/src/auth/guards/jwt-auth.guard.ts":
/*!********************************************************!*\
  !*** ./apps/gateway/src/auth/guards/jwt-auth.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtAuthGuard: () => (/* binding */ JwtAuthGuard)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let JwtAuthGuard = class JwtAuthGuard extends (0,_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)()
], JwtAuthGuard);



/***/ }),

/***/ "./apps/gateway/src/auth/strategies/jwt.strategy.ts":
/*!**********************************************************!*\
  !*** ./apps/gateway/src/auth/strategies/jwt.strategy.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtStrategy: () => (/* binding */ JwtStrategy)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;





let JwtStrategy = class JwtStrategy extends (0,_nestjs_passport__WEBPACK_IMPORTED_MODULE_1__.PassportStrategy)(passport_jwt__WEBPACK_IMPORTED_MODULE_2__.Strategy) {
    configService;
    logger;
    constructor(configService, logger) {
        super({
            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.secret'),
        });
        this.configService = configService;
        this.logger = logger;
    }
    validate(payload) {
        if (!payload.sub || !payload.email) {
            this.logger.warn({ payload }, 'Invalid JWT token payload');
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedException('Invalid token payload');
        }
        this.logger.debug({ userId: payload.sub, email: payload.email }, 'JWT token validated successfully');
        return { userId: payload.sub, email: payload.email };
    }
};
JwtStrategy = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService) === "function" ? _a : Object, typeof (_b = typeof nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger !== "undefined" && nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger) === "function" ? _b : Object])
], JwtStrategy);



/***/ }),

/***/ "./apps/gateway/src/networking/networking.module.ts":
/*!**********************************************************!*\
  !*** ./apps/gateway/src/networking/networking.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkingModule: () => (/* binding */ NetworkingModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _networking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networking.service */ "./apps/gateway/src/networking/networking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let NetworkingModule = class NetworkingModule {
};
NetworkingModule = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
        providers: [_networking_service__WEBPACK_IMPORTED_MODULE_1__.NetworkingService],
        exports: [_networking_service__WEBPACK_IMPORTED_MODULE_1__.NetworkingService],
    })
], NetworkingModule);



/***/ }),

/***/ "./apps/gateway/src/networking/networking.service.ts":
/*!***********************************************************!*\
  !*** ./apps/gateway/src/networking/networking.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkingService: () => (/* binding */ NetworkingService)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aladia/common */ "@aladia/common");
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aladia_common__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;






let NetworkingService = class NetworkingService {
    configService;
    logger;
    client;
    isConnected = false;
    reconnectAttempts = 0;
    maxReconnectAttempts = 10;
    reconnectInterval = null;
    constructor(configService, logger) {
        this.configService = configService;
        this.logger = logger;
        this.client = _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__.ClientProxyFactory.create({
            transport: _nestjs_microservices__WEBPACK_IMPORTED_MODULE_3__.Transport.TCP,
            options: {
                host: this.configService.get('microservices.authentication.host') ||
                    'localhost',
                port: this.configService.get('microservices.authentication.port') ||
                    3001,
            },
        });
    }
    async onModuleInit() {
        await this.connectWithRetry();
    }
    async connectWithRetry() {
        try {
            await this.client.connect();
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.logger.log('Successfully connected to authentication microservice');
        }
        catch {
            this.isConnected = false;
            this.reconnectAttempts++;
            if (this.reconnectAttempts <= this.maxReconnectAttempts) {
                const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts - 1), 10000);
                this.logger.warn(`Failed to connect to authentication microservice (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}). Retrying in ${delay}ms...`);
                this.reconnectInterval = setTimeout(() => {
                    this.connectWithRetry();
                }, delay);
            }
            else {
                this.logger.error(`Failed to connect to authentication microservice after ${this.maxReconnectAttempts} attempts. The service will continue to retry in the background.`);
                this.reconnectInterval = setInterval(() => {
                    this.connectWithRetry();
                }, 10000);
            }
        }
    }
    async ensureConnected() {
        if (!this.isConnected) {
            await this.client.connect();
            this.isConnected = true;
            this.reconnectAttempts = 0;
            if (this.reconnectInterval) {
                clearInterval(this.reconnectInterval);
                this.reconnectInterval = null;
            }
        }
    }
    async onModuleDestroy() {
        if (this.reconnectInterval) {
            clearInterval(this.reconnectInterval);
        }
        await this.client.close();
    }
    async registerUser(registerUserDto) {
        await this.ensureConnected();
        if (!this.isConnected) {
            throw new Error('Authentication microservice is not available. Please ensure the service is running.');
        }
        try {
            return await (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.client.send(_aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.REGISTER, registerUserDto));
        }
        catch (error) {
            this.isConnected = false;
            this.logger.error({
                error: error instanceof Error ? error.message : String(error),
                messagePattern: _aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.REGISTER,
            }, 'Failed to register user via authentication microservice');
            this.connectWithRetry();
            throw error;
        }
    }
    async login(loginUserDto) {
        await this.ensureConnected();
        if (!this.isConnected) {
            throw new Error('Authentication microservice is not available. Please ensure the service is running.');
        }
        try {
            return await (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.client.send(_aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.LOGIN, loginUserDto));
        }
        catch (error) {
            this.isConnected = false;
            this.logger.error({
                error: error instanceof Error ? error.message : String(error),
                messagePattern: _aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.LOGIN,
            }, 'Failed to login user via authentication microservice');
            this.connectWithRetry();
            throw error;
        }
    }
    async getAllUsers() {
        await this.ensureConnected();
        if (!this.isConnected) {
            throw new Error('Authentication microservice is not available. Please ensure the service is running.');
        }
        try {
            return await (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.client.send(_aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.GET_ALL, {}));
        }
        catch (error) {
            this.isConnected = false;
            this.logger.error({
                error: error instanceof Error ? error.message : String(error),
                messagePattern: _aladia_common__WEBPACK_IMPORTED_MODULE_5__.MESSAGE_PATTERNS.USER.GET_ALL,
            }, 'Failed to get all users via authentication microservice');
            this.connectWithRetry();
            throw error;
        }
    }
};
NetworkingService = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService) === "function" ? _a : Object, typeof (_b = typeof nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.Logger !== "undefined" && nestjs_pino__WEBPACK_IMPORTED_MODULE_2__.Logger) === "function" ? _b : Object])
], NetworkingService);



/***/ }),

/***/ "@aladia/common":
/*!*********************************!*\
  !*** external "@aladia/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@aladia/common");

/***/ }),

/***/ "@aladia/config":
/*!*********************************!*\
  !*** external "@aladia/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@aladia/config");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./apps/gateway/src/main.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module */ "./apps/gateway/src/app.module.ts");






async function bootstrap() {
    const app = await _nestjs_core__WEBPACK_IMPORTED_MODULE_0__.NestFactory.create(_app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule, {
        bufferLogs: true,
    });
    app.useLogger(app.get(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger));
    app.flushLogs();
    app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const swaggerConfig = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__.DocumentBuilder()
        .setTitle('Aladia Challenge API')
        .setDescription('Gateway API for user management')
        .setVersion('1.0')
        .addTag('auth')
        .addBearerAuth()
        .build();
    const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__.SwaggerModule.createDocument(app, swaggerConfig);
    _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__.SwaggerModule.setup('api', app, document);
    const configService = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService);
    const logger = app.get(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger);
    const port = configService.get('port') || 3000;
    await app.listen(port);
    logger.log(`Gateway is running on: http://localhost:${port}`);
    logger.log(`Swagger documentation: http://localhost:${port}/api`);
}
bootstrap();

})();

/******/ })()
;