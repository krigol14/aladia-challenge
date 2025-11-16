/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/authentication/src/app.module.ts":
/*!***********************************************!*\
  !*** ./apps/authentication/src/app.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aladia_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aladia/config */ "@aladia/config");
/* harmony import */ var _aladia_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aladia_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./apps/authentication/src/user/user.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./apps/authentication/src/auth/auth.module.ts");
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
                load: [_aladia_config__WEBPACK_IMPORTED_MODULE_4__.configuration],
                isGlobal: true,
            }),
            nestjs_pino__WEBPACK_IMPORTED_MODULE_3__.LoggerModule.forRoot({
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
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__.MongooseModule.forRootAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_1__.ConfigModule],
                useFactory: (configService) => ({
                    uri: configService.get('database.mongodb.uri'),
                }),
                inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService],
            }),
            _user_user_module__WEBPACK_IMPORTED_MODULE_5__.UserModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule,
        ],
    })
], AppModule);



/***/ }),

/***/ "./apps/authentication/src/auth/auth.module.ts":
/*!*****************************************************!*\
  !*** ./apps/authentication/src/auth/auth.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./apps/authentication/src/auth/jwt.service.ts");
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
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtModule.registerAsync({
                imports: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigModule],
                useFactory: (configService) => {
                    const expiresIn = (configService.get('jwt.expiresIn') ||
                        '1d');
                    return {
                        secret: configService.get('jwt.secret') || '',
                        signOptions: {
                            expiresIn,
                        },
                    };
                },
                inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService],
            }),
        ],
        providers: [_jwt_service__WEBPACK_IMPORTED_MODULE_3__.AuthJwtService],
        exports: [_jwt_service__WEBPACK_IMPORTED_MODULE_3__.AuthJwtService],
    })
], AuthModule);



/***/ }),

/***/ "./apps/authentication/src/auth/jwt.service.ts":
/*!*****************************************************!*\
  !*** ./apps/authentication/src/auth/jwt.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthJwtService: () => (/* binding */ AuthJwtService)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
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



let AuthJwtService = class AuthJwtService {
    jwtService;
    configService;
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async generateToken(user) {
        const payload = { sub: user.id, email: user.email };
        const expiresIn = (this.configService.get('jwt.expiresIn') ||
            '1d');
        return this.jwtService.signAsync(payload, {
            secret: this.configService.get('jwt.secret') || '',
            expiresIn,
        });
    }
};
AuthJwtService = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtService !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtService) === "function" ? _a : Object, typeof (_b = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _b : Object])
], AuthJwtService);



/***/ }),

/***/ "./apps/authentication/src/user/schemas/user.schema.ts":
/*!*************************************************************!*\
  !*** ./apps/authentication/src/user/schemas/user.schema.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   UserSchema: () => (/* binding */ UserSchema)
/* harmony export */ });
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let User = class User {
    email;
    name;
    password;
    createdAt;
    updatedAt;
};
__decorate([
    (0,_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true, unique: true, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0,_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0,_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__.Prop)({ required: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    (0,_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema)({ timestamps: true })
], User);

const UserSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_0__.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/authentication/src/user/user.controller.ts":
/*!*********************************************************!*\
  !*** ./apps/authentication/src/user/user.controller.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserController: () => (/* binding */ UserController)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aladia/common */ "@aladia/common");
/* harmony import */ var _aladia_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aladia_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./apps/authentication/src/user/user.service.ts");
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
var _a, _b, _c, _d, _e, _f;




let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async register(registerUserDto) {
        return await this.userService.register(registerUserDto);
    }
    async login(loginUserDto) {
        return await this.userService.login(loginUserDto);
    }
    async getAllUsers() {
        return await this.userService.getAllUsers();
    }
};
__decorate([
    (0,_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__.MessagePattern)(_aladia_common__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_PATTERNS.USER.REGISTER),
    __param(0, (0,_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof _aladia_common__WEBPACK_IMPORTED_MODULE_2__.RegisterUserDto !== "undefined" && _aladia_common__WEBPACK_IMPORTED_MODULE_2__.RegisterUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "register", null);
__decorate([
    (0,_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__.MessagePattern)(_aladia_common__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_PATTERNS.USER.LOGIN),
    __param(0, (0,_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof _aladia_common__WEBPACK_IMPORTED_MODULE_2__.LoginUserDto !== "undefined" && _aladia_common__WEBPACK_IMPORTED_MODULE_2__.LoginUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "login", null);
__decorate([
    (0,_nestjs_microservices__WEBPACK_IMPORTED_MODULE_1__.MessagePattern)(_aladia_common__WEBPACK_IMPORTED_MODULE_2__.MESSAGE_PATTERNS.USER.GET_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "getAllUsers", null);
UserController = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService !== "undefined" && _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService) === "function" ? _a : Object])
], UserController);



/***/ }),

/***/ "./apps/authentication/src/user/user.module.ts":
/*!*****************************************************!*\
  !*** ./apps/authentication/src/user/user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.controller */ "./apps/authentication/src/user/user.controller.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./apps/authentication/src/user/user.service.ts");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.repository */ "./apps/authentication/src/user/user.repository.ts");
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/user.schema */ "./apps/authentication/src/user/schemas/user.schema.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/authentication/src/auth/auth.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let UserModule = class UserModule {
};
UserModule = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__.MongooseModule.forFeature([{ name: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__.User.name, schema: _schemas_user_schema__WEBPACK_IMPORTED_MODULE_5__.UserSchema }]),
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__.AuthModule,
        ],
        controllers: [_user_controller__WEBPACK_IMPORTED_MODULE_2__.UserController],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService, _user_repository__WEBPACK_IMPORTED_MODULE_4__.UserRepository],
        exports: [_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService],
    })
], UserModule);



/***/ }),

/***/ "./apps/authentication/src/user/user.repository.ts":
/*!*********************************************************!*\
  !*** ./apps/authentication/src/user/user.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* binding */ UserRepository)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _schemas_user_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schemas/user.schema */ "./apps/authentication/src/user/schemas/user.schema.ts");
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
var _a;




let UserRepository = class UserRepository {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        const savedUser = await createdUser.save();
        return this.toIUser(savedUser);
    }
    async findAll() {
        const users = await this.userModel.find().exec();
        return users.map((user) => this.toIUser(user));
    }
    async findByEmail(email) {
        const user = await this.userModel.findOne({ email }).exec();
        return user ? this.toIUser(user) : null;
    }
    async findByEmailWithPassword(email) {
        return await this.userModel.findOne({ email }).select('+password').exec();
    }
    toIUser(user) {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
};
UserRepository = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __param(0, (0,_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__.InjectModel)(_schemas_user_schema__WEBPACK_IMPORTED_MODULE_3__.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_2__.Model !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_2__.Model) === "function" ? _a : Object])
], UserRepository);



/***/ }),

/***/ "./apps/authentication/src/user/user.service.ts":
/*!******************************************************!*\
  !*** ./apps/authentication/src/user/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.repository */ "./apps/authentication/src/user/user.repository.ts");
/* harmony import */ var _auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/jwt.service */ "./apps/authentication/src/auth/jwt.service.ts");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;





let UserService = class UserService {
    userRepository;
    authJwtService;
    logger;
    constructor(userRepository, authJwtService, logger) {
        this.userRepository = userRepository;
        this.authJwtService = authJwtService;
        this.logger = logger;
    }
    async register(registerUserDto) {
        const existingUser = await this.userRepository.findByEmail(registerUserDto.email);
        if (existingUser) {
            this.logger.warn({ email: registerUserDto.email }, 'Registration attempt with existing email');
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.ConflictException('User with this email already exists');
        }
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_4__.hash(registerUserDto.password, 10);
        const user = await this.userRepository.create({
            email: registerUserDto.email,
            name: registerUserDto.name,
            password: hashedPassword,
        });
        this.logger.log({ userId: user.id, email: user.email }, 'User registered successfully');
        return user;
    }
    async login(loginUserDto) {
        const user = await this.userRepository.findByEmailWithPassword(loginUserDto.email);
        if (!user) {
            this.logger.warn({ email: loginUserDto.email }, 'Login attempt with non-existent email');
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt__WEBPACK_IMPORTED_MODULE_4__.compare(loginUserDto.password, user.password);
        const userDto = this.userRepository.toIUser(user);
        if (!isPasswordValid) {
            this.logger.warn({ email: loginUserDto.email, userId: userDto.id }, 'Login attempt with invalid password');
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.UnauthorizedException('Invalid credentials');
        }
        const accessToken = await this.authJwtService.generateToken(userDto);
        this.logger.log({ userId: userDto.id, email: userDto.email }, 'User logged in successfully');
        return {
            user: userDto,
            accessToken,
        };
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll();
        this.logger.log({ count: users.length }, 'Retrieved all users');
        return users;
    }
};
UserService = __decorate([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _user_repository__WEBPACK_IMPORTED_MODULE_2__.UserRepository !== "undefined" && _user_repository__WEBPACK_IMPORTED_MODULE_2__.UserRepository) === "function" ? _a : Object, typeof (_b = typeof _auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__.AuthJwtService !== "undefined" && _auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__.AuthJwtService) === "function" ? _b : Object, typeof (_c = typeof nestjs_pino__WEBPACK_IMPORTED_MODULE_1__.Logger !== "undefined" && nestjs_pino__WEBPACK_IMPORTED_MODULE_1__.Logger) === "function" ? _c : Object])
], UserService);



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

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

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
/*!*****************************************!*\
  !*** ./apps/authentication/src/main.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
/* harmony import */ var _nestjs_microservices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_microservices__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module */ "./apps/authentication/src/app.module.ts");






async function bootstrap() {
    const app = await _nestjs_core__WEBPACK_IMPORTED_MODULE_0__.NestFactory.createMicroservice(_app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule, {
        transport: _nestjs_microservices__WEBPACK_IMPORTED_MODULE_2__.Transport.TCP,
        options: {
            host: process.env.AUTHENTICATION_SERVICE_HOST || 'localhost',
            port: parseInt(process.env.AUTHENTICATION_SERVICE_PORT || '3001', 10),
        },
        bufferLogs: true,
    });
    app.useLogger(app.get(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger));
    app.flushLogs();
    app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const configService = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_3__.ConfigService);
    const logger = app.get(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.Logger);
    const host = configService.get('microservices.authentication.host');
    const port = configService.get('microservices.authentication.port');
    await app.listen();
    logger.log(`Authentication microservice is listening on ${host}:${port}`);
}
bootstrap();

})();

/******/ })()
;