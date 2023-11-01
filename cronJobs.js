const cron = require("node-cron");
const Tenant = require("./models/tenant");

// Schedule tasks to be run on the server at midnight every night.
cron.schedule("0 18 * * *", function () {
  resetTasks();
});

async function resetTasks() {
  try {
    // Fetch all tenants
    const tenants = await Tenant.find({});

    // Iterate over each tenant and reset tasks
    for (let tenant of tenants) {
      if (tenant.tasks) {
        for (let task of tenant.tasks) {
          task.taskComplete = false;
        }
      }

      // Save changes to database
      await tenant.save();
    }

    console.log("Tasks have been reset!");
  } catch (error) {
    console.error("Error resetting tasks:", error);
  }
}

function initializeCronJobs() {
  cron.schedule("0 18 * * *", function () {
    resetTasks();
  });
  console.log("Cron job initialized");
}

module.exports = { initializeCronJobs };
