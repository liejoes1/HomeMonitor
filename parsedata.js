var homemonModels = require('./homemonModels');
module.exports.parse = function(result)
{
    homemonModels.serverUpTimeSec = result.monit.server[0].uptime[0];
    homemonModels.serverStartTimeSec = result.monit.server[0].incarnation[0];
    homemonModels.serverMemoryKB = result.monit.platform[0].memory[0];

    // Apache
    homemonModels.apacheUpTime = result.monit.service[0].uptime[0];
    homemonModels.apacheCPU = result.monit.service[0].cpu[0].percenttotal[0];
    homemonModels.apacheMemoryKB = result.monit.service[0].memory[0].kilobytetotal[0];
    homemonModels.apacheMemoryPercentage = result.monit.service[0].memory[0].percenttotal[0];
    
    // SSH
    homemonModels.SSHUpTime = result.monit.service[1].uptime[0];
    homemonModels.SSHCPU = result.monit.service[1].cpu[0].percenttotal[0];
    homemonModels.SSHMemoryKB = result.monit.service[1].memory[0].kilobytetotal[0];
    homemonModels.SSHMemoryPercentage = result.monit.service[1].memory[0].percenttotal[0];
    
    // Samba
    homemonModels.sambaUpTime = result.monit.service[2].uptime[0];
    homemonModels.sambaCPU = result.monit.service[2].cpu[0].percenttotal[0];
    homemonModels.sambaMemoryKB = result.monit.service[2].memory[0].kilobytetotal[0];
    homemonModels.sambaMemoryPercentage = result.monit.service[2].memory[0].percenttotal[0];
    
    // Cups
    homemonModels.cupsUpTime = result.monit.service[3].uptime[0];
    homemonModels.cupsCPU = result.monit.service[3].cpu[0].percenttotal[0];
    homemonModels.cupsMemoryKB = result.monit.service[3].memory[0].kilobytetotal[0];
    homemonModels.cupsMemoryPercentage = result.monit.service[3].memory[0].percenttotal[0];
            
    return (homemonModels);
}  