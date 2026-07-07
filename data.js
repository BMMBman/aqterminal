// AstravaQuant Revenue Command Center mock data layer.
// Mock data only. Do not add private borrower data, secrets, API keys, or live credentials here.
//
// GOOGLE SHEETS REPLACEMENT POINT:
// Later, replace this object by fetching rows from Google Sheets, an Apps Script JSON endpoint,
// a CSV parser, Firebase, Supabase, or an internal API, then normalize into this same shape.
// Keeping this contract stable lets the dashboard renderer stay mostly unchanged.
window.ASTRAVA_REVENUE_DATA = {
          highestValueAction: {
            title: "Call Investment Property Buyer",
            summary:
              "High loan amount, no touch in 10 days, and a possible $900K purchase. This is the cleanest revenue-producing conversation to create before noon.",
            contact: "Investment Property Buyer",
            reason: "High-value scenario needs movement",
            suggestedAction: "Call, then send updated DSCR/payment options",
            potentialLoanAmount: "$720,000 est.",
            estimatedCommission: "$9,000 est.",
            priority: "High",
            logMessage: "Touch logged for Investment Property Buyer"
          },
          importCsv: {
            label: "Import CSV",
            description: "Upload Encompass/CRM CSV to refresh pipeline.",
            sampleFile: "data/sample-pipeline.csv",
            autoLoad: true,
            // LIVE WEBSITE CSV SOURCE:
            // Easiest workflow: keep your pipeline in Google Sheets, publish/export it as CSV,
            // then paste that CSV URL below. The terminal will fetch it on load and refresh it
            // every refreshSeconds. Do not publish sensitive borrower data unless the terminal
            // and data source are protected for private internal use.
            remoteCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRimIwmaU7Hq_QAKMCaMOgsFDO-bbsR84lpaT7oS4WALJmck4oXkX3OdeLKGkTwe4ZQLtUYDyN5BxhB/pub?output=csv",
            refreshSeconds: 60,
            sourceColumns:
              "Name, Agent, Stage, LoanType, PurchasePrice, LoanAmount, Probability, EstimatedCommission, LastContact, NextAction, DueDate, Priority, Status, Notes"
          },
          integrationSettings: [
            {
              name: "Google Sheets",
              status: "Future",
              description:
                "Replace mock borrower, agent, task, commission, and content arrays with normalized rows from a Google Sheet or Apps Script JSON endpoint."
            },
            {
              name: "Gmail",
              status: "Future",
              description:
                "Use approved Gmail metadata later to surface follow-up reminders and recent touch history. Do not store email secrets in this app."
            },
            {
              name: "Google Calendar",
              status: "Future",
              description:
                "Replace mock calendar deadlines with closings, inspections, lock expirations, meetings, open houses, and publishing deadlines."
            },
            {
              name: "Encompass CSV Import",
              status: "Future",
              description:
                "Use the sample CSV schema as the import contract for refreshing borrower pipeline records from Encompass or CRM exports."
            },
            {
              name: "Firebase/Supabase Database",
              status: "Future",
              description:
                "Persist borrowers, agents, touches, notes, tasks, and revenue priority scores in a real database when the workflow is ready."
            }
          ],
          scoreboard: [
            ["Hot Leads", "4", "High-intent borrowers who need action today.", "green"],
            ["Follow-Ups Due Today", "12", "Borrowers, agents, files, and content touches.", "yellow"],
            ["Active Pre-Approvals", "7", "Open pre-approvals that should be matched to listings.", "blue"],
            ["Contracts in Process", "3", "Protect conditions, docs, deadlines, and lock decisions.", "green"],
            ["Files at Risk", "1", "Inspection negotiation and borrower response risk.", "red"],
            ["Expected Commission Pipeline", "$38.4K", "Mock gross commission across active opportunities.", "green"],
            ["This Month Projected Commission", "$14.8K", "Weighted projection from likely closings.", "yellow"],
            ["Closed Loans This Month", "2", "Closed and funded units for the current month.", "blue"]
          ],
          borrowers: [
            {
              borrower: "Megan",
              agentSource: "Gina Hammer",
              loanType: "Conventional",
              purchasePrice: 215000,
              loanAmount: 204250,
              stage: "Shopping",
              stageBoard: "Shopping",
              lastContact: "Today",
              nextAction: "Update payment scenario after showing",
              priority: "High",
              probability: 62,
              estCommission: 2550,
              status: "Needs call",
              expectedCloseMonth: "August",
              daysSinceContact: 0,
              stageUrgency: 76,
              referralValue: 90,
              missingDocs: 20,
              timeline: 64
            },
            {
              borrower: "Alexis & Brett",
              agentSource: "Direct",
              loanType: "FHA",
              purchasePrice: 172000,
              loanAmount: 168885,
              stage: "Pre-Approved",
              stageBoard: "Pre-Approved",
              lastContact: "2 days ago",
              nextAction: "Ask if they want updated numbers on listings",
              priority: "Medium",
              probability: 58,
              estCommission: 2110,
              status: "Warm",
              expectedCloseMonth: "September",
              daysSinceContact: 2,
              stageUrgency: 58,
              referralValue: 45,
              missingDocs: 15,
              timeline: 42
            },
            {
              borrower: "Investment Property Buyer",
              agentSource: "Direct",
              loanType: "Conventional",
              purchasePrice: 900000,
              loanAmount: 720000,
              stage: "Scenario Review",
              stageBoard: "Contacted",
              lastContact: "10 days ago",
              nextAction: "Call and send updated scenario",
              priority: "High",
              probability: 48,
              estCommission: 9000,
              status: "Overdue",
              expectedCloseMonth: "October",
              daysSinceContact: 10,
              stageUrgency: 72,
              referralValue: 58,
              missingDocs: 40,
              timeline: 48
            },
            {
              borrower: "Nathaniel",
              agentSource: "Agent Referral",
              loanType: "Conventional 20yr",
              purchasePrice: 425000,
              loanAmount: 340000,
              stage: "Contract Negotiation",
              stageBoard: "Offer Accepted",
              lastContact: "Yesterday",
              nextAction: "Hold pending inspection negotiation",
              priority: "Medium",
              probability: 68,
              estCommission: 4250,
              status: "At Risk",
              expectedCloseMonth: "August",
              daysSinceContact: 1,
              stageUrgency: 84,
              referralValue: 72,
              missingDocs: 30,
              timeline: 78
            },
            {
              borrower: "First Walk-In",
              agentSource: "Branch",
              loanType: "Conventional",
              purchasePrice: 125000,
              loanAmount: 118750,
              stage: "Nurture",
              stageBoard: "Lost / Nurture",
              lastContact: "14 days ago",
              nextAction: "Send first-time buyer checklist",
              priority: "Low",
              probability: 24,
              estCommission: 1485,
              status: "Nurture",
              expectedCloseMonth: "Unknown",
              daysSinceContact: 14,
              stageUrgency: 28,
              referralValue: 26,
              missingDocs: 55,
              timeline: 24
            }
          ],
          moneyActions: [
            ["Investment Property Buyer", "Borrower", "Follow up with high-value scenario", "No contact in 10 days and purchase could reach $900K.", "Very High", "9:00 AM", "Open"],
            ["Megan", "Borrower", "Call with payment update", "Showing happened and the buyer needs current numbers.", "High", "10:00 AM", "Open"],
            ["Alexis & Brett", "Borrower", "Text about updated listing numbers", "They are pre-approved and need a reason to re-engage.", "Medium", "11:30 AM", "Open"],
            ["Gina Hammer", "Agent", "Send market note", "Active relationship with current buyer referral potential.", "High", "12:00 PM", "Open"],
            ["Nathaniel File", "File", "Review inspection negotiation risk", "Deal can stall if the next move is unclear.", "High", "1:00 PM", "Watch"],
            ["MRPI Update", "Content", "Post MRPI update", "Supports agent credibility and creates market-touch reason.", "Medium", "2:30 PM", "Draft"],
            ["Agent Outreach", "Agent", "DM 5 agents with market insight", "Creates new conversations without waiting for inbound leads.", "Medium", "3:30 PM", "Open"]
          ],
          pipelineStages: [
            "New Lead",
            "Contacted",
            "Application Started",
            "Docs Needed",
            "Pre-Approved",
            "Shopping",
            "Offer Accepted",
            "In Process",
            "Underwriting",
            "Clear to Close",
            "Closed",
            "Lost / Nurture"
          ],
          agentMetrics: [
            ["Active Agent Relationships", "10", "Current referral and nurture list."],
            ["Agents Touched This Week", "6", "Touches logged through calls, texts, DMs, and notes."],
            ["Referrals This Month", "4", "Borrower opportunities from agent channels."],
            ["Agent Meetings Scheduled", "2", "Coffee, office visits, and one-on-ones."],
            ["Open House Opportunities", "5", "Listings where payment support can help."],
            ["Agent Spotlight Candidates", "3", "Potential BMMB / social features."]
          ],
          agents: [
            ["Gina Hammer", "Tier 1", "Today", "After Megan update", "High", 2, 1, "Active buyer relationship.", "Call with payment scenario and ask what buyers need this week."],
            ["Maria Ledyard", "Tier 2", "This week", "Send affordability note", "High", 1, 0, "Warm relationship.", "Send short local market note with one buyer talking point."],
            ["Jake Mattoon", "Tier 2", "Last week", "Text open house support", "Medium", 1, 0, "Good listing opportunity.", "Offer payment scenarios for weekend traffic."],
            ["Kerri Whetstone", "Tier 2", "Last week", "Market note check-in", "Medium", 0, 0, "Warm and practical.", "Ask what her buyers are stuck on right now."],
            ["Trudi Moag", "Nurture", "2 weeks ago", "Invite BMMB feedback", "Medium", 0, 0, "Content loop opportunity.", "Ask what local data would help her buyers."],
            ["Lindsay", "Nurture", "2 weeks ago", "DM buyer script", "Medium", 0, 0, "Social engagement opportunity.", "Send affordability script and ask if useful."],
            ["Danielle", "Tier 3", "New", "Intro market note", "Medium", 0, 0, "New relationship.", "Lead with value and avoid hard pitch."],
            ["Brigid", "Tier 3", "New", "Ask about active buyers", "Medium", 0, 0, "Payment scenario support.", "Offer fast pre-approval and payment clarity."],
            ["Natalia", "Nurture", "This month", "Send BMMB issue", "Low", 0, 0, "Market intelligence fit.", "Ask for one buyer question she is hearing."],
            ["Samantha", "Tier 3", "New", "Open house value note", "Medium", 0, 0, "Listing support.", "Offer a simple payment cheat sheet."]
          ],
          followUps: {
            "Due Today": [
              ["Megan", "Payment update after showing", "Today", "Hey Megan, just checking in after the showing. Want me to update the payment numbers based on where you're thinking?"]
            ],
            Overdue: [
              ["Investment Property Buyer", "High-value scenario, no contact in 10 days", "10 days ago", "Wanted to circle back on the investment scenario. If the target range is still $500K-$900K, I can update the numbers and narrow down the strongest path."]
            ],
            "Waiting on Borrower": [
              ["Alexis & Brett", "Listing and payment feedback", "2 days ago", "Want me to refresh the payment numbers on anything you are looking at this week?"]
            ],
            "Waiting on Agent": [
              ["Gina Hammer", "Buyer showing feedback", "Today", "Hey Gina, quick market note for your buyers today - the 10Y is holding near key levels, so payment certainty still matters."]
            ],
            "Docs Needed": [
              ["Nathaniel", "Inspection negotiation pending", "Yesterday", "I am holding tight while the inspection negotiation plays out. Once you have direction, I can help keep the financing timeline protected."]
            ],
            "Rate Update Needed": [
              ["Pre-Approval List", "Rate-sensitive buyers", "This week", "Rates are still moving with the bond market. Want updated payment numbers before you tour or write anything?"]
            ],
            "Market Update Opportunity": [
              ["Agent List", "Useful reason to touch agents", "Today", "Quick market note: buyers should focus on payment certainty, not trying to perfectly time the bottom."]
            ]
          },
          forecastCards: [
            ["Current Month Projected Commission", "$14.8K", "Weighted from files likely to close this month."],
            ["Next Month Projected Commission", "$11.6K", "Pre-approvals and contracts likely to convert."],
            ["90-Day Pipeline", "$38.4K", "Gross potential across active opportunities."],
            ["Weighted Pipeline", "$18.9K", "Probability-adjusted commission forecast."],
            ["Best Case", "$42.7K", "If high-value opportunities convert."],
            ["Base Case", "$18.9K", "Current weighted expectation."],
            ["Conservative Case", "$9.4K", "Risk-adjusted lower bound."]
          ],
          activity: [
            ["Calls Made", 2, 5],
            ["Agent Texts", 3, 5],
            ["Borrower Follow-Ups", 4, 5],
            ["Applications Started", 1, 2],
            ["Pre-Approvals Sent", 1, 2],
            ["Agent Meetings Booked", 0, 1],
            ["Open Houses Attended", 0, 1],
            ["Market Notes Sent", 1, 1],
            ["Social Posts Published", 0, 1],
            ["Pipeline Review", 1, 1]
          ],
          market: [
            ["10Y Treasury", "4.28%", "Still the core driver for mortgage rate conversation.", ""],
            ["30Y Mortgage Rate", "6.86%", "Placeholder average for borrower payment examples.", ""],
            ["MRPI Score", "-0.67", "Model suggests mortgage pressure leans toward caution.", ""],
            ["MRPI Regime", "Lean Lock", "Do not promise rate relief. Protect payment certainty.", ""],
            ["Lock / Float Bias", "Lean Lock", "If payment works and closing is near, protect the deal.", ""],
            ["Key Rate Level", "4.25% 10Y", "Watch whether Treasury breaks or rejects this level.", ""],
            [
              "Today's Agent Talking Point",
              "Certainty matters",
              "Rates are still moving with the 10Y Treasury. If your buyer likes the payment, certainty matters more than trying to perfectly time the market.",
              "talking-point"
            ],
            [
              "Today's Borrower Talking Point",
              "Protect the deal",
              "The goal is not guessing the bottom. The goal is knowing the payment and protecting the deal.",
              "talking-point"
            ]
          ],
          bmmbCards: [
            ["This Week's Brief Status", "Drafting", "Macro and mortgage sections need final edits."],
            ["Agent Spotlight", "3 candidates", "Pick one relationship to feature or support."],
            ["Market Update Draft", "MRPI angle", "Turn model insight into agent-facing language."],
            ["Social Post Needed", "1:1 post", "Use one practical buyer payment talking point."],
            ["Agents to Send Brief To", "24", "Prioritize Tier 1 and Tier 2 relationships."],
            ["New Subscribers", "7", "Track agent and buyer list growth."],
            ["Replies / Engagement", "4", "Follow up with any agent who replies."],
            ["Referral Opportunities Created", "2", "Content should create conversations, not impressions."]
          ],
          bmmbPlan: {
            topic: "Payment certainty while affordability pressure stays high",
            audience: "Buffalo-area agents with active buyers",
            purpose: "Create useful agent conversations and referral opportunities",
            cta: "Reply with one buyer scenario and I will send updated payment numbers",
            followUp: "Gina Hammer, Maria Ledyard, Jake Mattoon, Kerri Whetstone, Trudi Moag"
          },
          bmmbChecklist: [
            "Finalize macro section",
            "Finalize mortgage rate section",
            "Add Erie County housing note",
            "Add Niagara County housing note",
            "Write agent-facing takeaway",
            "Create 1:1 social post",
            "Publish Beehiiv",
            "Post Instagram/Facebook",
            "Send to agent list",
            "Log replies and referral opportunities"
          ],
          calendar: [
            ["Closings", [["Aug 12", "Nathaniel target closing window"], ["Aug 29", "Projected file in process closing"]]],
            ["Contract Deadlines", [["Today", "Inspection negotiation follow-up"], ["Fri", "Updated condition check"]]],
            ["Inspections", [["Pending", "Nathaniel inspection negotiation"], ["Sat", "Possible buyer walkthrough"]]],
            ["Rate Lock Expirations", [["Aug 4", "File in process lock review"], ["Aug 18", "Rate update needed"]]],
            ["Appointments", [["9:00 AM", "Investment buyer call"], ["2:00 PM", "Pre-approval review block"]]],
            ["Agent Meetings", [["Thu", "Maria market coffee"], ["Next Tue", "Jake open house recap"]]],
            ["Open Houses", [["Weekend", "Review 5 local opportunities"], ["Sun", "Send payment scenarios"]]],
            ["Newsletter Deadlines", [["Wed", "BMMB draft"], ["Fri", "Publish and send"]]],
            ["Bills / Subscriptions", [["This week", "Software subscriptions"], ["Month end", "Ad spend review"]]]
          ],
          finance: [
            ["Bills Due This Week", "$1,240", "Mock personal and business obligations."],
            ["Business Expenses", "$2,850", "Monthly operating cost estimate."],
            ["Ad Spend", "$450", "Current monthly placeholder."],
            ["Software Subscriptions", "$610", "CRM, hosting, research, design, and publishing tools."],
            ["Commission Income Expected", "$14,800", "Projected current month gross commission."],
            ["Monthly Cash Gap / Surplus", "+$5,650", "Placeholder surplus after tracked obligations."]
          ],
          quickLinks: [
            ["Gmail", "https://mail.google.com/"],
            ["Google Calendar", "https://calendar.google.com/"],
            ["Google Sheets", "https://docs.google.com/spreadsheets/"],
            ["Beehiiv", "https://app.beehiiv.com/"],
            ["GitHub", "https://github.com/"],
            ["Vercel", "https://vercel.com/dashboard"],
            ["Firebase", "https://console.firebase.google.com/"],
            ["Encompass", "#"],
            ["HUNT Mortgage", "#"],
            ["TradingView", "https://www.tradingview.com/"],
            ["FRED", "https://fred.stlouisfed.org/"],
            ["Mortgage News Daily", "https://www.mortgagenewsdaily.com/"],
            ["Buffalo Mortgage Market Brief", "#"],
            ["AstravaQuant Public Site", "#"]
          ],
          notes: ["Today's notes", "Borrower notes", "Agent notes", "Content ideas", "Market observations", "Follow-up ideas"],
          activityFeed: [
            ["8:42 AM", "Called Megan"],
            ["9:05 AM", "Sent Gina market note"],
            ["9:28 AM", "Updated MRPI"],
            ["10:15 AM", "Added agent follow-up"],
            ["11:00 AM", "Published BMMB post"]
          ]
        };
