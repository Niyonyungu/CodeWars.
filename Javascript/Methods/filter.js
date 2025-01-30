const test = () => {

    const jobs = [
        { id: "1", isActive: true },
        { id: "2", isActive: true },
        { id: "3", isActive: false },
    ];

    const ActiveJobs = jobs.filter((job) => job.isActive);

    setTimeout(() => {
        console.log("Active Jobs are", ActiveJobs.length);
    }, 5000)

}
test();