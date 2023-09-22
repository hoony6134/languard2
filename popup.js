document.addEventListener("DOMContentLoaded", function () {
    const closeTimeInput = document.getElementById("closeTime");
    const filteringEnabledCheckbox = document.getElementById("filteringEnabled");
    const nsfwEnabledCheckbox = document.getElementById("nsfwEnabled");
    const saveButton = document.getElementById("saveButton");

    // Load the saved settings from Chrome storage
    chrome.storage.sync.get(["closeTime", "filteringEnabled", "nsfwEnabled"], function (data) {
        closeTimeInput.value = data.closeTime || 5; // Default to 5 seconds
        filteringEnabledCheckbox.checked = data.filteringEnabled !== false; // Default to true
        nsfwEnabledCheckbox.checked = data.nsfwEnabled !== false; // Default to true
    });

    // Save the settings when the "Save" button is clicked
    saveButton.addEventListener("click", function () {
        const closeTime = parseInt(closeTimeInput.value); // Convert to milliseconds
        const filteringEnabled = filteringEnabledCheckbox.checked;
        const nsfwEnabled = nsfwEnabledCheckbox.checked;

        // Save the settings to Chrome storage
        chrome.storage.sync.set({ closeTime, filteringEnabled, nsfwEnabled }, function () {
            // Close the popup
            // show the alert
            alert("저장되었습니다.");
            window.close();
        });
    });
});
