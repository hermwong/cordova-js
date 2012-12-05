/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

module.exports = {
    /**
     * Get connection info
     *
     * @param {Function} successCallback The function to call when the Connection data is available
     * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
     */
    getConnectionInfo: function (successCallback, errorCallback) {
        // Get info
        console.log("Firefox OS Plugin: NetworkStatus - getConnectionInfo");

        var bandwidth = navigator.connection.bandwidth;
        var connectionType = null;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';
              
        if (bandwidth == 0) {
            connectionType = states[6];
        } else if (bandwidth == "Infinity") {
            connectionType = states[0];
        } else if (bandwidth > 0) {
            connectionType = states[0];
        } 
        
        if (connectionType != null) {
            successCallback(connectionType);
        } else {
            errorCallback();
        }
        
        
        
    }
};