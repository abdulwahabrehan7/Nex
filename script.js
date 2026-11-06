const guides = [
 {id:1,cat:'windows',tag:'Windows',title:'Windows is slow or freezing',desc:'A safe first-response checklist for slow startup, high resource use and unresponsive apps.',img:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80',time:'5–10 min',steps:['Confirm whether the issue affects one application or the whole device.','Open Task Manager (Ctrl + Shift + Esc) and review CPU, memory and disk usage.','Check available storage and confirm Windows updates are not actively installing.','Restart the affected application; restart the device only after saving work.','Review Reliability Monitor or Event Viewer if the issue continues.','Record findings and escalate recurring performance or disk errors.'],tip:'Do not end unfamiliar system processes or disable security software to improve performance.'},
 {id:2,cat:'network',tag:'Network & VPN',title:'No internet connection',desc:'Work from physical connectivity to IP configuration, gateway and DNS checks.',img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',time:'5–12 min',steps:['Check whether other users or devices on the same network are affected.','Verify Wi-Fi is enabled or Ethernet is connected; check dock and cable indicators.','Run ipconfig /all and review IPv4 address, subnet mask, default gateway and DNS.','Run ipconfig /release then ipconfig /renew only when appropriate for the network.','Test the default gateway, then test a known external IP and a domain name.','If IP works but names fail, investigate DNS; document command output and escalate.'],tip:'A 169.254.x.x IPv4 address often indicates the device did not receive a DHCP lease.'},
 {id:3,cat:'network',tag:'Network & VPN',title:'VPN will not connect',desc:'Check credentials, connectivity, client status, time settings and common access blockers.',img:'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=900&q=80',time:'5–10 min',steps:['Capture the exact VPN error and note the time it occurred.','Confirm internet access works before connecting to VPN.','Check system date, time and time zone are correct.','Confirm the user account is active and has the required VPN access.','Restart the approved VPN client and retry once; avoid repeated lockout attempts.','Check service status or known outage notices, then escalate logs to the network team.'],tip:'Never ask a user to send their password or MFA code in a ticket or chat.'},
 {id:4,cat:'m365',tag:'Microsoft 365',title:'Outlook is not syncing',desc:'A structured approach to offline status, connectivity, mailbox and client-side issues.',img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',time:'5–10 min',steps:['Check whether Outlook shows Working Offline, Disconnected or Trying to connect.','Confirm the user can access the internet and, if permitted, Outlook on the web.','Check Microsoft 365 service health or internal outage communications.','Restart Outlook and confirm the correct profile and mailbox are selected.','Check mailbox storage and any send/receive or authentication prompts.','If the issue is desktop-only, follow approved profile repair steps or escalate.'],tip:'If webmail works but the desktop app does not, focus on the local Outlook profile or client.'},
 {id:5,cat:'access',tag:'Accounts & access',title:'User cannot sign in',desc:'Check identity, account state, password flow, MFA and permissions without compromising security.',img:'https://images.unsplash.com/photo-1614064641938-3bbee52942c?auto=format&fit=crop&w=900&q=80',time:'5–8 min',steps:['Confirm username format, device and application being accessed.','Capture the exact error; check keyboard layout and Caps Lock.','Verify account status and sign-in logs using authorised admin tools.','Check password expiry, lockout and MFA registration according to policy.','For access denied, verify group membership and application role assignment.','Apply only approved reset/unlock procedures and confirm access with the user.'],tip:'Follow identity verification policy before resetting credentials or changing access.'},
 {id:6,cat:'hardware',tag:'Hardware',title:'PC powers on but no display',desc:'Isolate monitor, cable, dock, graphics output and workstation hardware causes.',img:'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80',time:'5–15 min',steps:['Confirm monitor power, input source and brightness.','Reseat display cable at both ends and check the correct dock or GPU port.','Try a known-good cable, monitor or port where available.','Disconnect nonessential peripherals and perform an approved restart.','Observe POST indicators or beep codes if the device provides them.','Escalate suspected RAM, GPU, motherboard or power faults to hardware support.'],tip:'Power down and disconnect equipment before reseating internal components; observe ESD and warranty rules.'},
 {id:7,cat:'windows',tag:'Windows',title:'Printer is not printing',desc:'Check queue, default printer, connectivity, paper state and driver health.',img:'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80',time:'5–10 min',steps:['Check printer power, display messages, paper and toner.','Confirm the user selected the correct printer and it is not paused or offline.','Clear only the affected stuck job if permitted; avoid clearing shared queues without approval.','Check network reachability or USB connection and print a test page.','Confirm the correct driver and printer mapping are installed.','Record printer name, queue and error before escalating.'],tip:'For shared printers, check whether multiple users are affected before changing the queue.'},
 {id:8,cat:'m365',tag:'Microsoft 365',title:'Teams microphone or camera issue',desc:'Resolve common device permission, selection and meeting configuration problems.',img:'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=900&q=80',time:'3–8 min',steps:['Check physical mute, camera shutter and headset connection.','In Teams settings, select the correct speaker, microphone and camera.','Check operating system privacy permissions for microphone and camera.','Close other apps that may be using the camera or audio device.','Test with the Teams device test or a permitted test call.','Update or reinstall drivers only through approved software channels.'],tip:'A camera privacy shutter or hardware mute switch can look like a software fault.'},
 {id:9,cat:'hardware',tag:'Hardware',title:'Laptop battery drains quickly',desc:'Check power mode, battery health, background load and charging hardware.',img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',time:'5–10 min',steps:['Confirm charger wattage and check cable, adapter and charging port.','Review battery usage by app and Windows power mode.','Check battery health using approved manufacturer diagnostics.','Review sleep, screen brightness and background application activity.','Install approved firmware or driver updates if recommended by the vendor.','Escalate swelling, unusual heat or physical battery damage immediately.'],tip:'Do not continue using or charging a swollen or physically damaged battery.'}
];
const grid=document.getElementById('guideGrid');
function renderGuides(){
 const q=document.getElementById('searchInput').value.toLowerCase().trim(), cat=document.getElementById('categoryFilter').value;
 const filtered=guides.filter(g=>(cat==='all'||g.cat===cat)&&[g.title,g.desc,g.tag,...g.steps].join(' ').toLowerCase().includes(q));
 grid.innerHTML=filtered.map(g=>`<article class="guide-card"><img class="guide-image" src="${g.img}" alt="${g.tag} troubleshooting" loading="lazy"><div class="guide-body"><div class="flex items-center justify-between gap-2"><span class="guide-tag">${g.tag}</span><span class="text-xs text-muted">${g.time}</span></div><h3>${g.title}</h3><p>${g.desc}</p><button class="guide-action" data-guide="${g.id}">Open step-by-step guide <span aria-hidden="true">→</span></button></div></article>`).join('');
 document.getElementById('emptyState').classList.toggle('hidden',filtered.length!==0);
 grid.querySelectorAll('[data-guide]').forEach(btn=>btn.addEventListener('click',()=>openGuide(Number(btn.dataset.guide))));
}
function openGuide(id) {

    const guide = guides.find(g => g.id === id);

    if (!guide) return;

    // Populate popup information
    document.getElementById('modalCategory').textContent = guide.tag;

    document.getElementById('modalTitle').textContent = guide.title;

    document.getElementById('modalTime').textContent =
        '⏱ Estimated time: ' + guide.time;

    document.getElementById('modalImage').src = guide.img;

    document.getElementById('modalDescription').textContent =
        guide.desc;

    document.getElementById('modalTip').textContent =
        guide.tip;

    // Generate troubleshooting steps
    const stepsContainer = document.getElementById('modalSteps');

    stepsContainer.innerHTML = guide.steps.map((step, index) => `
        <div class="guide-step">
            <div class="guide-step-number">
                ${String(index + 1).padStart(2, '0')}
            </div>

            <p class="guide-step-text">
                ${step}
            </p>
        </div>
    `).join('');

    // Display popup
    const modal = document.getElementById('guideModal');

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.body.classList.add('modal-open');
}

// Close popup function
function closeGuide() {

    const modal = document.getElementById('guideModal');

    modal.classList.add('hidden');
    modal.classList.remove('flex');

    document.body.classList.remove('modal-open');
}

// Close buttons
document.getElementById('closeGuide')
    .addEventListener('click', closeGuide);

document.getElementById('doneGuide')
    .addEventListener('click', closeGuide);

// Close when clicking outside popup
document.getElementById('guideModal')
    .addEventListener('click', function(event) {

        if (event.target === this) {
            closeGuide();
        }

    });

// Escape key
document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        closeGuide();
    }

});

// Print guide
document.getElementById('printGuide')
    .addEventListener('click', function() {

        const title = document.getElementById('modalTitle').textContent;
        const category = document.getElementById('modalCategory').textContent;
        const description = document.getElementById('modalDescription').textContent;
        const time = document.getElementById('modalTime').textContent;
        const steps = document.getElementById('modalSteps').innerText;
        const tip = document.getElementById('modalTip').textContent;

        const printWindow = window.open('', '_blank');

        if (!printWindow) {
            alert('Please allow popups to print this guide.');
            return;
        }

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 40px auto;
                        padding: 20px;
                        color: #17211f;
                        line-height: 1.7;
                    }

                    h1 { font-size: 28px; }
                    h3 { margin-top: 30px; }
                    .category { color: #176b52; font-weight: bold; }
                    .tip {
                        background: #e8f5ed;
                        padding: 18px;
                        border-radius: 12px;
                        margin-top: 25px;
                    }
                    @media print {
                        body { margin: 15px; }
                    }
                </style>
            </head>
            <body>
                <p class="category">${category}</p>
                <h1>${title}</h1>
                <p>${time}</p>
                <p>${description}</p>

                <h3>Step-by-step troubleshooting</h3>
                <pre style="white-space:pre-wrap;font-family:Arial">${steps}</pre>

                <div class="tip">
                    <strong>IT Support Tip</strong>
                    <p>${tip}</p>
                </div>

                <script>
                    window.onload = function() {
                        window.print();
                    };
                <\/script>
            </body>
            </html>
        `);

        printWindow.document.close();

    });
document.getElementById('searchInput').addEventListener('input',renderGuides);
document.getElementById('categoryFilter').addEventListener('change',renderGuides);
renderGuides();

document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('hidden'));
document.querySelectorAll('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mobileMenu').classList.add('hidden')));

function refreshConnection(){
 document.getElementById('onlineStatus').textContent=navigator.onLine?'Online':'Offline';
 const c=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
 document.getElementById('connectionType').textContent=c?.type||'Not exposed by browser';
 document.getElementById('effectiveType').textContent=c?.effectiveType||'Not exposed by browser';
}
refreshConnection();window.addEventListener('online',refreshConnection);window.addEventListener('offline',refreshConnection);
document.getElementById('refreshConnection').addEventListener('click',refreshConnection);

document.getElementById('checkIP').addEventListener('click',async()=>{
 const out=document.getElementById('ipResult'),note=document.getElementById('ipNote');out.textContent='Checking…';note.textContent='Contacting ipify…';
 try{const r=await fetch('https://api.ipify.org?format=json');if(!r.ok)throw new Error('API request failed');const d=await r.json();out.textContent=d.ip;note.textContent='Returned by api.ipify.org. This is your public-facing IP.'}
 catch(e){out.textContent='Lookup failed';note.textContent='Check internet access or browser privacy settings and try again.'}
});
document.getElementById('checkDNS').addEventListener('click',async()=>{
 const domain=document.getElementById('dnsDomain').value.trim().replace(/^https?:\/\//,'').split('/')[0],out=document.getElementById('dnsResult');
 if(!/^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)(\.([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?))+$/.test(domain)){out.textContent='Enter a valid domain name, such as example.com.';return}
 out.textContent='Querying Cloudflare DNS…';
 try{const r=await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=A`,{headers:{accept:'application/dns-json'}});if(!r.ok)throw new Error('DNS query failed');const d=await r.json();const answers=(d.Answer||[]).filter(a=>a.type===1).map(a=>a.data);out.textContent=answers.length?`A records for ${domain}:\n${answers.join('\n')}`:`No A record returned. DNS status: ${d.Status} (0 = NOERROR).`}
 catch(e){out.textContent='DNS lookup failed. Check connectivity and try again.'}
});

function makeTicket(){
 const v=id=>document.getElementById(id).value.trim()||'Not provided';
 const now=new Date().toLocaleString();
 return `INCIDENT NOTES\nDate/time: ${now}\nIssue: ${v('ticketTitle')}\nCategory: ${v('ticketCategory')}\nUser impact: ${v('ticketImpact')}\n\nTroubleshooting performed:\n${v('ticketSteps')}\n\nResolution / next action:\n${v('ticketResolution')}\n\nSecurity: No passwords or MFA codes included.`;
}
document.getElementById('generateTicket').addEventListener('click',()=>{const o=document.getElementById('ticketOutput');o.textContent=makeTicket();o.classList.remove('hidden')});
document.getElementById('copyTicket').addEventListener('click',async()=>{const o=document.getElementById('ticketOutput');if(o.classList.contains('hidden')){o.textContent=makeTicket();o.classList.remove('hidden')}try{await navigator.clipboard.writeText(o.textContent);document.getElementById('copyTicket').textContent='Copied!'}catch(e){document.getElementById('copyTicket').textContent='Select and copy notes'}setTimeout(()=>document.getElementById('copyTicket').textContent='Copy notes',1800)});

const questions=[
 {q:'A user reports that a website will not load. What is a useful first step?',a:['Reinstall Windows immediately','Check whether other websites and other users are affected','Replace the network switch','Disable the firewall'],correct:1,why:'First establish the scope. This helps separate a user/device issue from a wider service or network incident.'},
 {q:'A device has an IPv4 address beginning with 169.254. What should you investigate?',a:['DHCP address assignment','Monitor brightness','Outlook profile','Printer toner'],correct:0,why:'A 169.254.x.x address is an APIPA address and commonly indicates the client did not receive a DHCP lease.'},
 {q:'A user cannot access a restricted application. What should you verify?',a:['Give the user local administrator rights','Share another user password','Check authorised group membership and application role','Turn off MFA'],correct:2,why:'Verify approved access groups and application roles. Follow identity and access policies.'},
 {q:'Outlook web works, but desktop Outlook does not. What does this suggest?',a:['The whole internet is down','A local client, profile or device issue may be involved','The user account must be deleted','The monitor is faulty'],correct:1,why:'If web access works, focus the investigation on the local Outlook client, profile, cache or device configuration.'}
];
let qi=0,score=0,answered=false;
function renderQuiz(){
 const q=questions[qi];document.getElementById('quizProgress').textContent=`Question ${qi+1} of ${questions.length}`;document.getElementById('quizQuestion').textContent=q.q;document.getElementById('quizFeedback').textContent='';document.getElementById('nextQuestion').disabled=true;answered=false;
 document.getElementById('quizOptions').innerHTML=q.a.map((a,i)=>`<button class="quiz-option" data-choice="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join('');
 document.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{if(answered)return;answered=true;const choice=Number(b.dataset.choice);if(choice===q.correct){score++;b.classList.add('correct');document.getElementById('quizFeedback').textContent='Correct. '+q.why}else{b.classList.add('wrong');document.querySelector(`[data-choice="${q.correct}"]`).classList.add('correct');document.getElementById('quizFeedback').textContent='Not quite. '+q.why}document.querySelectorAll('[data-choice]').forEach(x=>x.disabled=true);document.getElementById('quizScore').textContent=`${score} / ${questions.length}`;document.getElementById('nextQuestion').disabled=false;}));
 document.getElementById('nextQuestion').textContent=qi===questions.length-1?'See result':'Next question';
}
document.getElementById('nextQuestion').addEventListener('click',()=>{if(qi<questions.length-1){qi++;renderQuiz()}else{document.getElementById('quizQuestion').textContent=`You scored ${score} out of ${questions.length}.`;document.getElementById('quizOptions').innerHTML='';document.getElementById('quizFeedback').textContent=score===questions.length?'Excellent work — structured troubleshooting!':'Good practice. Review the guides and try again.';document.getElementById('nextQuestion').disabled=true;document.getElementById('nextQuestion').textContent='Completed'}});
document.getElementById('restartQuiz').addEventListener('click',()=>{qi=0;score=0;document.getElementById('quizScore').textContent=`0 / ${questions.length}`;renderQuiz()});
renderQuiz();
