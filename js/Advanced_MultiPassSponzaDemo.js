webpackJsonp([18],{

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_awayjs_full_lib_parsers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_awayjs_full_lib_view__ = __webpack_require__(2);
/*

Crytek Sponza demo using multipass materials in Away3D

Demonstrates:

How to apply Multipass materials to a model
How to enable cascading shadow maps on a multipass material.
How to setup multiple lightsources, shadows and fog effects all in the same scene.
How to apply specular, normal and diffuse maps to an AWD model.

Code by Rob Bateman & David Lenaerts
rob@infiniteturtles.co.uk
http://www.infiniteturtles.co.uk
david.lenaerts@gmail.com
http://www.derschmale.com

Model re-modeled by Frank Meinl at Crytek with inspiration from Marko Dabrovic's original, converted to AWD by LoTH
contact@crytek.com
http://www.crytek.com/cryengine/cryengine3/downloads
3dflashlo@gmail.com
http://3dflashlo.wordpress.com

This code is distributed under the MIT License

Copyright (c) The Away Foundation http://www.theawayfoundation.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/






var Advanced_MultiPassSponzaDemo = function () {
    /**
     * Constructor
     */
    function Advanced_MultiPassSponzaDemo() {
        //root filepath for asset loading
        this._assetsRoot = "assets/";
        //default material data strings
        this._materialNameStrings = Array("arch", "Material__298", "bricks", "ceiling", "chain", "column_a", "column_b", "column_c", "fabric_g", "fabric_c", "fabric_f", "details", "fabric_d", "fabric_a", "fabric_e", "flagpole", "floor", "16___Default", "Material__25", "roof", "leaf", "vase", "vase_hanging", "Material__57", "vase_round");
        //private const diffuseTextureStrings:Array<string> = Array<string>(["arch_diff.atf", "background.atf", "bricks_a_diff.atf", "ceiling_a_diff.atf", "chain_texture.png", "column_a_diff.atf", "column_b_diff.atf", "column_c_diff.atf", "curtain_blue_diff.atf", "curtain_diff.atf", "curtain_green_diff.atf", "details_diff.atf", "fabric_blue_diff.atf", "fabric_diff.atf", "fabric_green_diff.atf", "flagpole_diff.atf", "floor_a_diff.atf", "gi_flag.atf", "lion.atf", "roof_diff.atf", "thorn_diff.png", "vase_dif.atf", "vase_hanging.atf", "vase_plant.png", "vase_round.atf"]);
        //private const normalTextureStrings:Array<string> = Array<string>(["arch_ddn.atf", "background_ddn.atf", "bricks_a_ddn.atf", null,                "chain_texture_ddn.atf", "column_a_ddn.atf", "column_b_ddn.atf", "column_c_ddn.atf", null,                   null,               null,                     null,               null,                   null,              null,                    null,                null,               null,          "lion2_ddn.atf", null,       "thorn_ddn.atf", "vase_ddn.atf",  null,               null,             "vase_round_ddn.atf"]);
        //private const specularTextureStrings:Array<string> = Array<string>(["arch_spec.atf", null,            "bricks_a_spec.atf", "ceiling_a_spec.atf", null,                "column_a_spec.atf", "column_b_spec.atf", "column_c_spec.atf", "curtain_spec.atf",      "curtain_spec.atf", "curtain_spec.atf",       "details_spec.atf", "fabric_spec.atf",      "fabric_spec.atf", "fabric_spec.atf",       "flagpole_spec.atf", "floor_a_spec.atf", null,          null,       null,            "thorn_spec.atf", null,           null,               "vase_plant_spec.atf", "vase_round_spec.atf"]);
        this._diffuseTextureStrings = Array("arch_diff.jpg", "background.jpg", "bricks_a_diff.jpg", "ceiling_a_diff.jpg", "chain_texture.png", "column_a_diff.jpg", "column_b_diff.jpg", "column_c_diff.jpg", "curtain_blue_diff.jpg", "curtain_diff.jpg", "curtain_green_diff.jpg", "details_diff.jpg", "fabric_blue_diff.jpg", "fabric_diff.jpg", "fabric_green_diff.jpg", "flagpole_diff.jpg", "floor_a_diff.jpg", "gi_flag.jpg", "lion.jpg", "roof_diff.jpg", "thorn_diff.png", "vase_dif.jpg", "vase_hanging.jpg", "vase_plant.png", "vase_round.jpg");
        this._normalTextureStrings = Array("arch_ddn.jpg", "background_ddn.jpg", "bricks_a_ddn.jpg", null, "chain_texture_ddn.jpg", "column_a_ddn.jpg", "column_b_ddn.jpg", "column_c_ddn.jpg", null, null, null, null, null, null, null, null, null, null, "lion2_ddn.jpg", null, "thorn_ddn.jpg", "vase_ddn.jpg", null, null, "vase_round_ddn.jpg");
        this._specularTextureStrings = Array("arch_spec.jpg", null, "bricks_a_spec.jpg", "ceiling_a_spec.jpg", null, "column_a_spec.jpg", "column_b_spec.jpg", "column_c_spec.jpg", "curtain_spec.jpg", "curtain_spec.jpg", "curtain_spec.jpg", "details_spec.jpg", "fabric_spec.jpg", "fabric_spec.jpg", "fabric_spec.jpg", "flagpole_spec.jpg", "floor_a_spec.jpg", null, null, null, "thorn_spec.jpg", null, null, "vase_plant_spec.jpg", "vase_round_spec.jpg");
        this._numTexStrings = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        this._spriteReference = new Array(25);
        //flame data objects
        this._flameData = Array(new FlameVO(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Vector3D"](-625, 165, 219), 0xffaa44), new FlameVO(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Vector3D"](485, 165, 219), 0xffaa44), new FlameVO(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Vector3D"](-625, 165, -148), 0xffaa44), new FlameVO(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Vector3D"](485, 165, -148), 0xffaa44));
        //material dictionaries to hold instances
        this._textureDictionary = new Object();
        this._multiMaterialDictionary = new Object();
        this._singleMaterialDictionary = new Object();
        //private spriteDictionary:Dictionary = new Dictionary();
        this.vaseSprites = new Array();
        this.poleSprites = new Array();
        this.colSprites = new Array();
        //gui variables
        this._singlePassMaterial = false;
        this._multiPassMaterial = true;
        this._cascadeLevels = 3;
        this._shadowOptions = "PCF";
        this._depthMapSize = 2048;
        this._lightDirection = Math.PI / 2;
        this._lightElevation = Math.PI / 18;
        this._lights = new Array();
        this._numTextures = 0;
        this._currentTexture = 0;
        this._n = 0;
        //scene variables
        this._sprites = new Array();
        //rotation variables
        this._move = false;
        //movement variables
        this._drag = 0.5;
        this._walkIncrement = 10;
        this._strafeIncrement = 10;
        this._walkSpeed = 0;
        this._strafeSpeed = 0;
        this._walkAcceleration = 0;
        this._strafeAcceleration = 0;
        this._time = 0;
        this.init();
    }
    /**
     * Global initialise function
     */
    Advanced_MultiPassSponzaDemo.prototype.init = function () {
        this.initEngine();
        this.initLights();
        this.initListeners();
        //count textures
        this._n = 0;
        this._loadingTextureStrings = this._diffuseTextureStrings;
        this.countNumTextures();
        //kickoff asset loading
        this._n = 0;
        this._loadingTextureStrings = this._diffuseTextureStrings;
        this.load(this._loadingTextureStrings[this._n]);
    };
    /**
     * Initialise the engine
     */
    Advanced_MultiPassSponzaDemo.prototype.initEngine = function () {
        //create the view
        this._view = new __WEBPACK_IMPORTED_MODULE_5_awayjs_full_lib_view__["View"]();
        this._view.camera.y = 150;
        this._view.camera.z = 0;
        //setup controller to be used on the camera
        this._cameraController = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["FirstPersonController"](this._view.camera, 90, 0, -80, 80);
    };
    /**
     * Initialise the lights
     */
    Advanced_MultiPassSponzaDemo.prototype.initLights = function () {
        //create lights array
        this._lights = new Array();
        //create global directional light
        //			this._cascadeShadowMapper = new CascadeShadowMapper(3);
        //			this._cascadeShadowMapper.lightOffset = 20000;
        this._directionalLight = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["DirectionalLight"](-1, -15, 1);
        //			this._directionalLight.shadowMapper = this._cascadeShadowMapper;
        this._directionalLight.color = 0xeedddd;
        this._directionalLight.ambient = .35;
        this._directionalLight.ambientColor = 0x808090;
        this._view.scene.addChild(this._directionalLight);
        this._lights.push(this._directionalLight);
        this.updateDirection();
        //create flame lights
        var flameVO;
        var len = this._flameData.length;
        for (var i = 0; i < len; i++) {
            flameVO = this._flameData[i];
            var light = flameVO.light = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["PointLight"]();
            light.radius = 200;
            light.fallOff = 600;
            light.color = flameVO.color;
            light.y = 10;
            this._lights.push(light);
        }
        //create our global light picker
        this._lightPicker = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["StaticLightPicker"](this._lights);
        this._baseShadowMethod = new __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__["ShadowSoftMethod"](this._directionalLight, 10, 5);
        //			this._baseShadowMethod = new ShadowFilteredMethod(this._directionalLight);
        //create our global fog method
        this._fogMethod = new __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__["EffectFogMethod"](0, 4000, 0x9090e7);
        //			this._cascadeMethod = new ShadowCascadeMethod(this._baseShadowMethod);
    };
    /**
     * Initialise the scene objects
     */
    Advanced_MultiPassSponzaDemo.prototype.initObjects = function () {
        //create skybox
        this._view.scene.addChild(new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Skybox"](this._skyMap));
        //create flame sprites
        this._flameGraphics = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["PrimitivePlanePrefab"](this._flameMaterial, __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["ElementsType"].TRIANGLE, 40, 80, 1, 1, false, true);
        var flameVO;
        var len = this._flameData.length;
        for (var i = 0; i < len; i++) {
            flameVO = this._flameData[i];
            var sprite = flameVO.sprite = this._flameGraphics.getNewObject();
            sprite.transform.moveTo(flameVO.position.x, flameVO.position.y, flameVO.position.z);
            var shape = sprite.graphics.getShapeAt(0);
            shape.style = new __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["Style"]();
            shape.style.uvMatrix = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Matrix"]();
            shape.style.uvMatrix.scale(1 / 16, 1);
            this._view.scene.addChild(sprite);
            sprite.addChild(flameVO.light);
        }
    };
    /**
     * Initialise the listeners
     */
    Advanced_MultiPassSponzaDemo.prototype.initListeners = function () {
        var _this = this;
        //add listeners
        window.onresize = function (event) {
            return _this.onResize(event);
        };
        document.onmousedown = function (event) {
            return _this.onMouseDown(event);
        };
        document.onmouseup = function (event) {
            return _this.onMouseUp(event);
        };
        document.onmousemove = function (event) {
            return _this.onMouseMove(event);
        };
        document.onkeydown = function (event) {
            return _this.onKeyDown(event);
        };
        document.onkeyup = function (event) {
            return _this.onKeyUp(event);
        };
        this.onResize();
        this.parseAWDDelegate = function (event) {
            return _this.parseAWD(event);
        };
        this.parseBitmapDelegate = function (event) {
            return _this.parseBitmap(event);
        };
        this.loadProgressDelegate = function (event) {
            return _this.loadProgress(event);
        };
        this.onBitmapCompleteDelegate = function (event) {
            return _this.onBitmapComplete(event);
        };
        this.onAssetCompleteDelegate = function (event) {
            return _this.onAssetComplete(event);
        };
        this.onResourceCompleteDelegate = function (event) {
            return _this.onResourceComplete(event);
        };
        this._timer = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["RequestAnimationFrame"](this.onEnterFrame, this);
        this._timer.start();
    };
    /**
     * Updates the material mode between single pass and multi pass
     */
    //		private updateMaterialPass(materialDictionary:Dictionary)
    //		{
    //			var sprite:Sprite;
    //			var name:string;
    //			var len:number = this._sprites.length;
    //			for (var i:number = 0; i < len; i++) {
    //				sprite = this._sprites[i];
    //				if (sprite.name == "sponza_04" || sprite.name == "sponza_379")
    //					continue;
    //				name = sprite.material.name;
    //				var textureIndex:number = this._materialNameStrings.indexOf(name);
    //				if (textureIndex == -1 || textureIndex >= this._materialNameStrings.length)
    //					continue;
    //
    //				sprite.material = materialDictionary[name];
    //			}
    //		}
    /**
     * Updates the direction of the directional lightsource
     */
    Advanced_MultiPassSponzaDemo.prototype.updateDirection = function () {
        this._directionalLight.direction = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Vector3D"](Math.sin(this._lightElevation) * Math.cos(this._lightDirection), -Math.cos(this._lightElevation), Math.sin(this._lightElevation) * Math.sin(this._lightDirection));
    };
    /**
     * Count the total number of textures to be loaded
     */
    Advanced_MultiPassSponzaDemo.prototype.countNumTextures = function () {
        this._numTextures++;
        //skip null textures
        while (this._n++ < this._loadingTextureStrings.length - 1) if (this._loadingTextureStrings[this._n]) break;
        //switch to next teture set
        if (this._n < this._loadingTextureStrings.length) {
            this.countNumTextures();
        } else if (this._loadingTextureStrings == this._diffuseTextureStrings) {
            this._n = 0;
            this._loadingTextureStrings = this._normalTextureStrings;
            this.countNumTextures();
        } else if (this._loadingTextureStrings == this._normalTextureStrings) {
            this._n = 0;
            this._loadingTextureStrings = this._specularTextureStrings;
            this.countNumTextures();
        }
    };
    /**
     * Global binary file loader
     */
    Advanced_MultiPassSponzaDemo.prototype.load = function (url) {
        var loader = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoader"]();
        switch (url.substring(url.length - 3)) {
            case "AWD":
            case "awd":
                loader.dataFormat = __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderDataFormat"].ARRAY_BUFFER;
                this._loadingText = "Loading Model";
                loader.addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_COMPLETE, this.parseAWDDelegate);
                break;
            case "png":
            case "jpg":
                loader.dataFormat = __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderDataFormat"].BLOB;
                this._currentTexture++;
                this._loadingText = "Loading Textures";
                loader.addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_COMPLETE, this.parseBitmapDelegate);
                url = "sponza/" + url;
                break;
        }
        loader.addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_PROGRESS, this.loadProgressDelegate);
        var urlReq = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLRequest"](this._assetsRoot + url);
        loader.load(urlReq);
    };
    /**
     * Display current load
     */
    Advanced_MultiPassSponzaDemo.prototype.loadProgress = function (e) {
        //TODO work out why the casting on ProgressEvent fails for bytesLoaded and bytesTotal properties
        var P = Math.floor(e["bytesLoaded"] / e["bytesTotal"] * 100);
        if (P != 100) {
            console.log(this._loadingText + '\n' + (this._loadingText == "Loading Model" ? Math.floor(e["bytesLoaded"] / 1024 << 0) + 'kb | ' + Math.floor(e["bytesTotal"] / 1024 << 0) + 'kb' : this._currentTexture + ' | ' + this._numTextures));
        }
    };
    /**
     * Parses the ATF file
     */
    //		private onATFComplete(e:Event)
    //		{
    //            var loader:URLLoader = URLLoader(e.target);
    //            loader.removeEventListener(Event.COMPLETE, this.onATFComplete);
    //
    //			if (!this._textureDictionary[this._loadingTextureStrings[this._n]])
    //			{
    //				this._textureDictionary[this._loadingTextureStrings[this._n]] = new ATFTexture(loader.data);
    //			}
    //
    //            loader.data = null;
    //            loader.close();
    //			loader = null;
    //
    //
    //			//skip null textures
    //			while (this._n++ < this._loadingTextureStrings.length - 1)
    //				if (this._loadingTextureStrings[this._n])
    //					break;
    //
    //			//switch to next teture set
    //            if (this._n < this._loadingTextureStrings.length) {
    //				this.load(this._loadingTextureStrings[this._n]);
    //			} else if (this._loadingTextureStrings == this._diffuseTextureStrings) {
    //				this._n = 0;
    //				this._loadingTextureStrings = this._normalTextureStrings;
    //				this.load(this._loadingTextureStrings[this._n]);
    //			} else if (this._loadingTextureStrings == this._normalTextureStrings) {
    //				this._n = 0;
    //				this._loadingTextureStrings = this._specularTextureStrings;
    //				this.load(this._loadingTextureStrings[this._n]);
    //			} else {
    //				this.load("sponza/sponza.awd");
    //            }
    //        }
    /**
     * Parses the Bitmap file
     */
    Advanced_MultiPassSponzaDemo.prototype.parseBitmap = function (e) {
        var urlLoader = e.target;
        var image = __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["ParserUtils"].blobToImage(urlLoader.data);
        image.onload = this.onBitmapCompleteDelegate;
        urlLoader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_COMPLETE, this.parseBitmapDelegate);
        urlLoader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_PROGRESS, this.loadProgressDelegate);
        urlLoader = null;
    };
    /**
     * Listener for bitmap complete event on loader
     */
    Advanced_MultiPassSponzaDemo.prototype.onBitmapComplete = function (event) {
        var image = event.target;
        image.onload = null;
        //create bitmap texture in dictionary
        if (!this._textureDictionary[this._loadingTextureStrings[this._n]]) this._textureDictionary[this._loadingTextureStrings[this._n]] = new __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["Single2DTexture"](this._loadingTextureStrings == this._specularTextureStrings ? new __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["SpecularImage2D"](__WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["ImageUtils"].imageToBitmapImage2D(image)) : __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["ImageUtils"].imageToBitmapImage2D(image));
        //skip null textures
        while (this._n++ < this._loadingTextureStrings.length - 1) if (this._loadingTextureStrings[this._n]) break;
        //switch to next teture set
        if (this._n < this._loadingTextureStrings.length) {
            this.load(this._loadingTextureStrings[this._n]);
        } else if (this._loadingTextureStrings == this._diffuseTextureStrings) {
            this._n = 0;
            this._loadingTextureStrings = this._normalTextureStrings;
            this.load(this._loadingTextureStrings[this._n]);
        } else if (this._loadingTextureStrings == this._normalTextureStrings) {
            this._n = 0;
            this._loadingTextureStrings = this._specularTextureStrings;
            this.load(this._loadingTextureStrings[this._n]);
        } else {
            this.load("sponza/sponza.awd");
        }
    };
    /**
     * Parses the AWD file
     */
    Advanced_MultiPassSponzaDemo.prototype.parseAWD = function (event) {
        console.log("Parsing Data");
        var urlLoader = event.target;
        var loader = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["LoaderContainer"](false);
        loader.addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["AssetEvent"].ASSET_COMPLETE, this.onAssetCompleteDelegate);
        loader.addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["LoaderEvent"].LOAD_COMPLETE, this.onResourceCompleteDelegate);
        loader.loadData(urlLoader.data, new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["LoaderContext"](false), null, new __WEBPACK_IMPORTED_MODULE_4_awayjs_full_lib_parsers__["AWDParser"]());
        urlLoader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_PROGRESS, this.loadProgressDelegate);
        urlLoader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLLoaderEvent"].LOAD_COMPLETE, this.parseAWDDelegate);
        urlLoader = null;
    };
    /**
     * Listener for asset complete event on loader
     */
    Advanced_MultiPassSponzaDemo.prototype.onAssetComplete = function (event) {
        if (event.asset.isAsset(__WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Sprite"])) {
            //store sprites
            this._sprites.push(event.asset);
        }
    };
    /**
     * Triggered once all resources are loaded
     */
    Advanced_MultiPassSponzaDemo.prototype.onResourceComplete = function (event) {
        var _this = this;
        var merge = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Merge"](false, false, true);
        var loader = event.target;
        loader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["AssetEvent"].ASSET_COMPLETE, this.onAssetCompleteDelegate);
        loader.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["LoaderEvent"].LOAD_COMPLETE, this.onResourceCompleteDelegate);
        //reassign materials
        var sprite;
        var name;
        var len = this._sprites.length;
        for (var i = 0; i < len; i++) {
            sprite = this._sprites[i];
            if (sprite.name == "sponza_04" || sprite.name == "sponza_379") continue;
            var num = Number(sprite.name.substring(7));
            name = sprite.material.name;
            if (name == "column_c" && (num < 22 || num > 33)) continue;
            var colNum = num - 125;
            if (name == "column_b") {
                if (colNum >= 0 && colNum < 132 && colNum % 11 < 10) {
                    this.colSprites.push(sprite);
                    continue;
                } else {
                    this.colSprites.push(sprite);
                    var colMerge = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Merge"]();
                    var colSprite = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Sprite"]();
                    colMerge.applyToSprites(colSprite, this.colSprites);
                    sprite = colSprite;
                    this.colSprites = new Array();
                }
            }
            var vaseNum = num - 334;
            if (name == "vase_hanging" && vaseNum % 9 < 5) {
                if (vaseNum >= 0 && vaseNum < 370 && vaseNum % 9 < 4) {
                    this.vaseSprites.push(sprite);
                    continue;
                } else {
                    this.vaseSprites.push(sprite);
                    var vaseMerge = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Merge"]();
                    var vaseSprite = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Sprite"]();
                    vaseMerge.applyToSprites(vaseSprite, this.vaseSprites);
                    sprite = vaseSprite;
                    this.vaseSprites = new Array();
                }
            }
            var poleNum = num - 290;
            if (name == "flagpole") {
                if (poleNum >= 0 && poleNum < 320 && poleNum % 3 < 2) {
                    this.poleSprites.push(sprite);
                    continue;
                } else if (poleNum >= 0) {
                    this.poleSprites.push(sprite);
                    var poleMerge = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Merge"]();
                    var poleSprite = new __WEBPACK_IMPORTED_MODULE_2_awayjs_full_lib_scene__["Sprite"]();
                    poleMerge.applyToSprites(poleSprite, this.poleSprites);
                    sprite = poleSprite;
                    this.poleSprites = new Array();
                }
            }
            if (name == "flagpole" && (num == 260 || num == 261 || num == 263 || num == 265 || num == 268 || num == 269 || num == 271 || num == 273)) continue;
            var textureIndex = this._materialNameStrings.indexOf(name);
            if (textureIndex == -1 || textureIndex >= this._materialNameStrings.length) continue;
            this._numTexStrings[textureIndex]++;
            var textureName = this._diffuseTextureStrings[textureIndex];
            var normalTextureName;
            var specularTextureName;
            //				//store single pass materials for use later
            //				var singleMaterial:MethodMaterial = this._singleMaterialDictionary[name];
            //
            //				if (!singleMaterial) {
            //
            //					//create singlepass material
            //					singleMaterial = new MethodMaterial(this._textureDictionary[textureName]);
            //
            //					singleMaterial.name = name;
            //					singleMaterial.lightPicker = this._lightPicker;
            //					singleMaterial.addMethod(this._fogMethod);
            //					singleMaterial.mipmap = true;
            //					singleMaterial.repeat = true;
            //					singleMaterial.specular = 2;
            //
            //					//use alpha transparancy if texture is png
            //					if (textureName.substring(textureName.length - 3) == "png")
            //						singleMaterial.alphaThreshold = 0.5;
            //
            //					//add normal map if it exists
            //					normalTextureName = this._normalTextureStrings[textureIndex];
            //					if (normalTextureName)
            //						singleMaterial.normalMap = this._textureDictionary[normalTextureName];
            //
            //					//add specular map if it exists
            //					specularTextureName = this._specularTextureStrings[textureIndex];
            //					if (specularTextureName)
            //						singleMaterial.specularMap = this._textureDictionary[specularTextureName];
            //
            //					this._singleMaterialDictionary[name] = singleMaterial;
            //
            //				}
            //store multi pass materials for use later
            var multiMaterial = this._multiMaterialDictionary[name];
            if (!multiMaterial) {
                //create multipass material
                multiMaterial = new __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__["MethodMaterial"]();
                multiMaterial.ambientMethod.texture = this._textureDictionary[textureName];
                multiMaterial.mode = __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__["MethodMaterialMode"].MULTI_PASS;
                multiMaterial.name = name;
                multiMaterial.lightPicker = this._lightPicker;
                //					multiMaterial.shadowMethod = this._cascadeMethod;
                multiMaterial.shadowMethod = this._baseShadowMethod;
                multiMaterial.addEffectMethod(this._fogMethod);
                multiMaterial.style.sampler = new __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["Sampler2D"](true, true, true);
                multiMaterial.style.addSamplerAt(new __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["Sampler2D"](true, true), this._directionalLight.shadowMapper.depthMap);
                multiMaterial.specularMethod.strength = 2;
                //use alpha transparancy if texture is png
                if (textureName.substring(textureName.length - 3) == "png") multiMaterial.alphaThreshold = 0.5;
                //add normal map if it exists
                normalTextureName = this._normalTextureStrings[textureIndex];
                if (normalTextureName) multiMaterial.normalMethod.texture = this._textureDictionary[normalTextureName];
                //add specular map if it exists
                specularTextureName = this._specularTextureStrings[textureIndex];
                if (specularTextureName) multiMaterial.specularMethod.texture = this._textureDictionary[specularTextureName];
                //add to material dictionary
                this._multiMaterialDictionary[name] = multiMaterial;
            }
            /*
            if (_spriteReference[textureIndex]) {
                var m:Sprite = sprite.clone() as Sprite;
                m.material = multiMaterial;
                _view.scene.addChild(m);
                continue;
            }
            */
            //default to multipass material
            sprite.material = multiMaterial;
            this._view.scene.addChild(sprite);
            this._spriteReference[textureIndex] = sprite;
        }
        var z = 0;
        while (z < this._numTexStrings.length) {
            console.log(this._diffuseTextureStrings[z], this._numTexStrings[z]);
            z++;
        }
        //load skybox and flame texture
        __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["AssetLibrary"].addEventListener(__WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["LoaderEvent"].LOAD_COMPLETE, function (event) {
            return _this.onExtraResourceComplete(event);
        });
        //setup the url map for textures in the cubemap file
        var loaderContext = new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["LoaderContext"]();
        loaderContext.dependencyBaseUrl = "assets/skybox/";
        //environment texture
        __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["AssetLibrary"].load(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLRequest"]("assets/skybox/hourglass_texture.cube"), loaderContext);
        //globe textures
        __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["AssetLibrary"].load(new __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["URLRequest"]("assets/fire.png"));
    };
    /**
     * Triggered once extra resources are loaded
     */
    Advanced_MultiPassSponzaDemo.prototype.onExtraResourceComplete = function (event) {
        switch (event.url) {
            case 'assets/skybox/hourglass_texture.cube':
                //create skybox texture map
                this._skyMap = event.assets[0];
                break;
            case "assets/fire.png":
                this._flameMaterial = new __WEBPACK_IMPORTED_MODULE_3_awayjs_full_lib_materials__["MethodMaterial"](event.assets[0]);
                this._flameMaterial.blendMode = __WEBPACK_IMPORTED_MODULE_1_awayjs_full_lib_graphics__["BlendMode"].ADD;
                this._flameMaterial.animateUVs = true;
                break;
        }
        if (this._skyMap && this._flameMaterial) this.initObjects();
    };
    /**
     * Navigation and render loop
     */
    Advanced_MultiPassSponzaDemo.prototype.onEnterFrame = function (dt) {
        if (this._walkSpeed || this._walkAcceleration) {
            this._walkSpeed = (this._walkSpeed + this._walkAcceleration) * this._drag;
            if (Math.abs(this._walkSpeed) < 0.01) this._walkSpeed = 0;
            this._cameraController.incrementWalk(this._walkSpeed);
        }
        if (this._strafeSpeed || this._strafeAcceleration) {
            this._strafeSpeed = (this._strafeSpeed + this._strafeAcceleration) * this._drag;
            if (Math.abs(this._strafeSpeed) < 0.01) this._strafeSpeed = 0;
            this._cameraController.incrementStrafe(this._strafeSpeed);
        }
        //animate flames
        var flameVO;
        var len = this._flameData.length;
        for (var i = 0; i < len; i++) {
            flameVO = this._flameData[i];
            //update flame light
            var light = flameVO.light;
            if (!light) continue;
            light.fallOff = 380 + Math.random() * 20;
            light.radius = 200 + Math.random() * 30;
            light.diffuse = .9 + Math.random() * .1;
            //update flame sprite
            var sprite = flameVO.sprite;
            if (!sprite) continue;
            var shape = sprite.graphics.getShapeAt(0);
            shape.style.uvMatrix.tx += 1 / 16;
            shape.style.uvMatrix.tx %= 1;
            sprite.rotationY = Math.atan2(sprite.x - this._view.camera.x, sprite.z - this._view.camera.z) * 180 / Math.PI;
        }
        this._view.render();
    };
    /**
     * Key down listener for camera control
     */
    Advanced_MultiPassSponzaDemo.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].UP:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].W:
                this._walkAcceleration = this._walkIncrement;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].DOWN:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].S:
                this._walkAcceleration = -this._walkIncrement;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].LEFT:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].A:
                this._strafeAcceleration = -this._strafeIncrement;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].RIGHT:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].D:
                this._strafeAcceleration = this._strafeIncrement;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].F:
                //stage.displayState = StageDisplayState.FULL_SCREEN;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].C:
                this._cameraController.fly = !this._cameraController.fly;
        }
    };
    /**
     * Key up listener for camera control
     */
    Advanced_MultiPassSponzaDemo.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].UP:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].W:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].DOWN:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].S:
                this._walkAcceleration = 0;
                break;
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].LEFT:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].A:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].RIGHT:
            case __WEBPACK_IMPORTED_MODULE_0_awayjs_full_lib_core__["Keyboard"].D:
                this._strafeAcceleration = 0;
                break;
        }
    };
    /**
     * Mouse down listener for navigation
     */
    Advanced_MultiPassSponzaDemo.prototype.onMouseDown = function (event) {
        this._lastPanAngle = this._cameraController.panAngle;
        this._lastTiltAngle = this._cameraController.tiltAngle;
        this._lastMouseX = event.clientX;
        this._lastMouseY = event.clientY;
        this._move = true;
    };
    /**
     * Mouse up listener for navigation
     */
    Advanced_MultiPassSponzaDemo.prototype.onMouseUp = function (event) {
        this._move = false;
    };
    Advanced_MultiPassSponzaDemo.prototype.onMouseMove = function (event) {
        if (this._move) {
            this._cameraController.panAngle = 0.3 * (event.clientX - this._lastMouseX) + this._lastPanAngle;
            this._cameraController.tiltAngle = 0.3 * (event.clientY - this._lastMouseY) + this._lastTiltAngle;
        }
    };
    /**
     * stage listener for resize events
     */
    Advanced_MultiPassSponzaDemo.prototype.onResize = function (event) {
        if (event === void 0) {
            event = null;
        }
        this._view.y = 0;
        this._view.x = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    return Advanced_MultiPassSponzaDemo;
}();
/**
* Data class for the Flame objects
*/
var FlameVO = function () {
    function FlameVO(position, color /*uint*/) {
        this.position = position;
        this.color = color;
    }
    return FlameVO;
}();
window.onload = function () {
    new Advanced_MultiPassSponzaDemo();
};

/***/ }

},[22]);
//# sourceMappingURL=Advanced_MultiPassSponzaDemo.js.map