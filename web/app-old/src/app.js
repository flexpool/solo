// Flexpool Solo - A lightweight SOLO Ethereum mining pool
// Copyright (C) 2020  Flexpool
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import "bootstrap";
import "./styles/main.scss";
import Vue from "vue";

var navbar = require("./components/Navbar.vue").default;

console.log(navbar);

import "./api.js";

var app = new Vue({
    el: "#app",
    components: {
        Navbar: navbar
    },
    data() {
        return { block_number: 12 }
    }
})