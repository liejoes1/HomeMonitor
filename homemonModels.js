class homemonModels {
    constructor(serverUpTimeSec, serverStartTimeSec, serverMemoryKB,
        apacheUpTime, apacheCPU, apacheMemoryKB, apahceMemoryPercentage,
        ) {
        this.serverUpTimeSec = serverUpTimeSec;
        this.serverStartTimeSec = serverStartTimeSec;
        this.serverMemoryKB = serverMemoryKB;
       
        // Apache
        this.apacheUpTime = apacheUpTime;
        this.apacheCPU = apacheCPU;
        this.apacheMemoryKB = apacheMemoryKB;
        this.apacheMemoryPercentage = apahceMemoryPercentage;
    
        // SSH
        this.SSHUpTime = SSHUpTime;
        this.SSHCPU = SSHCPU;
        this.SSHMemoryKB = SSHMemoryKB;
        this.SSHMemoryPercentage = SSHMemoryPercentage;
    
        // Samba
        this.sambaUpTime = sambaUpTime;
        this.sambaCPU = sambaCPU;
        this.sambaMemoryKB = sambaMemoryKB;
        this.sambaMemoryPercentage = sambaMemoryPercentage;
    
        // Cups
        this.cupsUpTime = cupsUpTime;
        this.cupsCPU = cupsCPU;
        this.cupsMemoryKB = cupsMemoryKB;
        this.cupsMemoryPercentage = cupsMemoryPercentage;
    
    }
}