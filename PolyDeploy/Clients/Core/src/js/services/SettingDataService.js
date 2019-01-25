﻿module.exports = ['$http', 'apiUrl',
    function ($http, apiUrl) {

        var controllerUrl = apiUrl + 'Setting/';

        // GET
        // Get a Setting.
        function getSetting(group, key) {

            // Make request.
            return $http.get(controllerUrl + `Get?group=${group}&key=${key}`).then(
                function (response) {

                    // Return unpacked data.
                    return response.data;
                });
        }

        // POST
        // Create a new IPSpec.
        function setSetting(group, key, value) {

            var data = {
                group: group,
                key: key,
                value: value
            };

            // Make request.
            return $http.post(controllerUrl + 'Set', data).then(
                function (response) {

                    // Return unpacked data.
                    return response.data;
                });
        }

        function getWhitelistState() {

            return getSetting('WHITELIST', 'STATE')
                .then(function (result) {
                    return result.Value.toLowerCase() === 'true';
                });
        }

        function setWhitelistState(value) {

            return setSetting('WHITELIST', 'STATE', value);
        }

        return {
            whitelist: {
                getState: getWhitelistState,
                setState: setWhitelistState
            }
        };

    }];