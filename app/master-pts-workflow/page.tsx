import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PTS Leads Funnel - Operating System | LoopHub",
  description: "PTS Leads Funnel Operating System - AI-First Process with Owner-Based Routing",
};

const html = `
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background: #f5f7fa; padding: 40px 20px; }
.container { max-width: 1600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
.header { text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 2px solid #e8edf3; }
.header h1 { font-size: 2.2em; color: #1a1f36; margin-bottom: 8px; font-weight: 700; }
.header p { color: #697386; font-size: 1.1em; }
.core-rule { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 24px 32px; border-radius: 12px; margin-bottom: 40px; text-align: center; }
.core-rule h2 { font-size: 1.4em; margin-bottom: 12px; font-weight: 600; }
.core-rule p { font-size: 1.05em; line-height: 1.6; opacity: 0.95; }
.section { margin: 50px 0; }
.section-title { font-size: 1.5em; color: #1a1f36; font-weight: 700; margin-bottom: 24px; padding-left: 12px; border-left: 4px solid #667eea; }
.flow { display: flex; align-items: stretch; gap: 24px; margin: 30px 0; }
.stage { background: white; border: 2px solid #e3e8ee; border-radius: 10px; padding: 20px; flex: 1; min-width: 200px; position: relative; transition: all 0.2s; }
.stage:hover { border-color: #667eea; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15); transform: translateY(-2px); }
.stage.ai { border-color: #10b981; background: linear-gradient(to bottom, #ffffff 0%, #f0fdf4 100%); }
.stage.human { border-color: #3b82f6; background: linear-gradient(to bottom, #ffffff 0%, #eff6ff 100%); }
.stage.shared { border-color: #f59e0b; background: linear-gradient(to bottom, #ffffff 0%, #fffbeb 100%); }
.stage.deal { border-color: #8b5cf6; background: linear-gradient(to bottom, #ffffff 0%, #faf5ff 100%); }
.stage.end { border-color: #ef4444; background: linear-gradient(to bottom, #ffffff 0%, #fef2f2 100%); }
.stage-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #e3e8ee; }
.stage-icon { width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.2em; }
.stage-icon.ai { background: #10b981; color: white; }
.stage-icon.human { background: #3b82f6; color: white; }
.stage-icon.shared { background: #f59e0b; color: white; }
.stage-icon.deal { background: #8b5cf6; color: white; }
.stage-icon.end { background: #ef4444; color: white; }
.stage-name { font-weight: 700; font-size: 1.1em; color: #1a1f36; flex: 1; }
.stage-owner { background: #f3f4f6; padding: 4px 10px; border-radius: 6px; font-size: 0.75em; color: #4b5563; font-weight: 600; display: inline-block; margin-bottom: 8px; }
.stage-content { font-size: 0.9em; color: #4b5563; line-height: 1.6; }
.stage-content strong { color: #1a1f36; }
.stage-list { list-style: none; margin: 8px 0; }
.stage-list li { padding: 4px 0 4px 20px; position: relative; }
.stage-list li:before { content: "•"; position: absolute; left: 6px; color: #667eea; font-weight: bold; }
.arrow { display: flex; align-items: center; justify-content: center; font-size: 2em; color: #cbd5e0; min-width: 40px; }
.arrow-down { text-align: center; font-size: 2.5em; color: #cbd5e0; margin: 16px 0; }
.info-box { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px 20px; border-radius: 8px; margin: 16px 0; }
.info-box-title { font-weight: 700; color: #1e40af; margin-bottom: 8px; font-size: 0.95em; }
.info-box-content { font-size: 0.9em; color: #1e3a8a; line-height: 1.5; }
.warning-box { background: #fef2f2; border-left: 4px solid #ef4444; padding: 16px 20px; border-radius: 8px; margin: 16px 0; }
.warning-box-title { font-weight: 700; color: #991b1b; margin-bottom: 8px; font-size: 0.95em; }
.warning-box-content { font-size: 0.9em; color: #7f1d1d; line-height: 1.5; }
.success-box { background: #f0fdf4; border-left: 4px solid #10b981; padding: 16px 20px; border-radius: 8px; margin: 16px 0; }
.success-box-title { font-weight: 700; color: #065f46; margin-bottom: 8px; font-size: 0.95em; }
.success-box-content { font-size: 0.9em; color: #064e3b; line-height: 1.5; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 24px 0; }
.badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.8em; font-weight: 600; margin: 4px 4px 4px 0; }
.badge.green { background: #d1fae5; color: #065f46; }
.badge.blue { background: #dbeafe; color: #1e40af; }
.badge.amber { background: #fef3c7; color: #92400e; }
.badge.purple { background: #ede9fe; color: #5b21b6; }
.badge.red { background: #fee2e2; color: #991b1b; }
.decision { background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 12px; padding: 24px; text-align: center; margin: 30px 0; }
.decision-title { font-size: 1.2em; font-weight: 700; color: #92400e; margin-bottom: 12px; }
.decision-options { display: flex; justify-content: center; gap: 24px; margin-top: 20px; flex-wrap: wrap; }
.option { background: white; border: 2px solid #fbbf24; border-radius: 10px; padding: 16px; min-width: 180px; flex: 1; max-width: 220px; }
.option-label { font-weight: 700; color: #92400e; margin-bottom: 8px; }
.option-result { font-size: 0.9em; color: #78350f; }
.timeline { display: flex; align-items: center; gap: 8px; margin: 6px 0; font-size: 0.85em; }
.timeline-badge { background: #3b82f6; color: white; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.85em; min-width: 50px; text-align: center; }
.legend { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; padding: 20px; background: #f9fafb; border-radius: 10px; margin: 30px 0; }
.legend-item { display: flex; align-items: center; gap: 8px; }
.legend-dot { width: 14px; height: 14px; border-radius: 50%; }
.legend-label { font-size: 0.9em; color: #4b5563; font-weight: 600; }
.footer { margin-top: 60px; padding-top: 30px; border-top: 2px solid #e8edf3; text-align: center; color: #697386; font-size: 0.9em; }
.footer-row { margin: 8px 0; }
@media print { body { background: white; padding: 0; } .container { box-shadow: none; } }
</style>

<div class="container">
  <div class="header">
    <h1>PTS Leads Funnel - Operating System</h1>
    <p>AI-First Process | Owner-Based Routing | Operational Clarity Edition | Launch: May 1, 2026</p>
  </div>

  <div class="legend">
    <div class="legend-item"><div class="legend-dot" style="background:#10b981;"></div><span class="legend-label">AI Domain (Mauricio)</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;"></div><span class="legend-label">Human Domain (Sales Reps)</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;"></div><span class="legend-label">Transition Zone</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#8b5cf6;"></div><span class="legend-label">Deal Pipeline</span></div>
    <div class="legend-item"><div class="legend-dot" style="background:#ef4444;"></div><span class="legend-label">Disposal/End</span></div>
  </div>

  <div class="core-rule">
    <h2>🎯 Core Operating Rule</h2>
    <p style="font-size:1.3em;font-weight:600;margin-bottom:16px;">BP decides the lane. Owner decides the execution. Tag triggers the system.</p>
    <p style="font-size:1em;"><strong>Bank Products threshold routing (ONLY 2 tiers):</strong><br>• BP &lt; 20 → Tag: <strong>"atlas"</strong> → AI lane (Owner: Mauricio)<br>• BP ≥ 20 → Tag: <strong>"outplay"</strong> → Human lane (Owner: Sales Rep)<br><br><strong>Priority note:</strong> BP ≥ 50 flagged as MAX PRIORITY within human lane<br><br><strong>Owner change trigger:</strong> When lead books meeting → Round robin to Sales Rep (tag changes to "outplay")</p>
  </div>

  <!-- ENTRY POINT -->
  <div class="section">
    <div class="section-title">📥 Entry Point</div>
    <div class="flow" style="justify-content:center;">
      <div class="stage ai" style="max-width:400px;">
        <div class="stage-header"><div class="stage-icon ai">📝</div><div class="stage-name">META FORM</div></div>
        <div class="stage-content">
          <strong>User fills Facebook form</strong>
          <div class="timeline"><span class="timeline-badge">0:01</span><span>Zapier → Zoho CRM</span></div>
          <div class="timeline"><span class="timeline-badge">0:02</span><span>SMS sent to user</span></div>
          <div class="timeline"><span class="timeline-badge">0:03</span><span>Redirect to landing page</span></div>
        </div>
      </div>
    </div>
    <div class="arrow-down">↓</div>
    <div class="flow" style="justify-content:center;">
      <div class="stage ai" style="max-width:500px;">
        <div class="stage-header"><div class="stage-icon ai">🤖</div><div class="stage-name">INBOUND MQL</div></div>
        <div class="stage-content">
          <strong>Immediate automation:</strong>
          <ul class="stage-list">
            <li>Formalize Bank Products (BP)</li>
            <li>Update Rating Score</li>
            <li>Data Enrichment (N8N)</li>
            <li><strong>Assign tag based on BP</strong></li>
          </ul>
          <div style="margin-top:16px;padding:12px;background:#fef3c7;border-radius:6px;border:2px solid #f59e0b;">
            <strong style="color:#92400e;">⚡ Tag Assignment (ONLY 2 options):</strong>
            <div style="margin-top:8px;font-size:0.85em;color:#78350f;">• <strong>BP &lt; 20</strong> → Tag: <strong>"atlas"</strong> → AI Lane<br>• <strong>BP ≥ 20</strong> → Tag: <strong>"outplay"</strong> → Human Lane</div>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow-down">↓</div>
    <div class="decision">
      <div class="decision-title">Bank Products Threshold</div>
      <div style="font-size:0.9em;color:#78350f;margin-top:8px;margin-bottom:16px;">Tag determines execution path</div>
      <div class="decision-options">
        <div class="option" style="border-color:#10b981;flex:1;max-width:350px;">
          <div class="option-label" style="color:#065f46;font-size:1.1em;">BP &lt; 20</div>
          <div class="option-result" style="color:#064e3b;">Tag: <strong>"atlas"</strong><br>Owner: Mauricio<br>→ REACHING (AI)</div>
        </div>
        <div class="option" style="border-color:#3b82f6;flex:1;max-width:350px;">
          <div class="option-label" style="color:#1e40af;font-size:1.1em;">BP ≥ 20</div>
          <div class="option-result" style="color:#1e3a8a;">Tag: <strong>"outplay"</strong><br>Owner: Sales Rep<br>→ ROUTING → REACHING (Human)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PATHS FROM THE FORM -->
  <div class="section">
    <div class="section-title">🔀 Paths from the Form</div>
    <div class="decision">
      <div class="decision-title">Did user visit Landing Page?</div>
      <div style="font-size:0.9em;color:#78350f;margin-top:8px;">Can arrive via Facebook redirect or SMS link</div>
    </div>
    <div class="flow">
      <div style="flex:1;">
        <div style="text-align:center;font-weight:700;color:#ef4444;margin-bottom:16px;font-size:1.1em;">❌ Did NOT visit</div>
        <div class="info-box">
          <div class="info-box-title">What happens:</div>
          <div class="info-box-content">
            <div class="timeline"><span class="timeline-badge">10 min</span><span>Atlas calls automatically (OUTBOUND)</span></div>
          </div>
        </div>
        <div class="arrow-down">↓</div>
        <div class="stage ai">
          <div class="stage-header"><div class="stage-icon ai">🎯</div><div class="stage-name">REACHING (AI)</div></div>
          <div class="stage-content">AI starts outreach cadence</div>
        </div>
      </div>
      <div style="flex:1;">
        <div style="text-align:center;font-weight:700;color:#10b981;margin-bottom:16px;font-size:1.1em;">✅ DID visit</div>
        <div style="background:white;border:2px solid #e3e8ee;border-radius:10px;padding:20px;">
          <div style="font-weight:700;margin-bottom:16px;color:#1a1f36;text-align:center;">3 Buttons on Landing Page:</div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:#faf5ff;border-radius:8px;">
              <div style="background:#8b5cf6;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;flex-shrink:0;">1</div>
              <div style="flex:1;font-size:0.9em;"><strong>Sign Contract</strong><div style="color:#6b7280;font-size:0.85em;">→ Converts to DEAL immediately</div></div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:#fffbeb;border-radius:8px;">
              <div style="background:#f59e0b;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;flex-shrink:0;">2</div>
              <div style="flex:1;font-size:0.9em;"><strong>Book Meeting</strong><div style="color:#6b7280;font-size:0.85em;">→ Goes to BOOKED (owner changes to rep)</div></div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:#f0fdf4;border-radius:8px;">
              <div style="background:#10b981;color:white;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;flex-shrink:0;">3</div>
              <div style="flex:1;font-size:0.9em;"><strong>Talk to AI Agent</strong><div style="color:#6b7280;font-size:0.85em;">→ INBOUND call, goes to REACHING (AI)</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- REACHING AI -->
  <div class="section">
    <div class="section-title">🤖 REACHING - AI Domain (BP &lt; 20 Only)</div>
    <div class="flow" style="justify-content:center;">
      <div class="stage ai" style="max-width:600px;">
        <div class="stage-header"><div class="stage-icon ai">🎯</div><div class="stage-name">REACHING (AI Mode)</div></div>
        <div class="stage-owner">Owner: Mauricio Esparza | BP &lt; 20 ONLY</div>
        <div class="stage-content">
          <strong>Who arrives here:</strong>
          <ul class="stage-list">
            <li>Leads with BP &lt; 20 from Inbound MQL (tag: "atlas")</li>
            <li>Those who clicked "Talk to AI Agent"</li>
            <li>10 min post-form if no action taken</li>
          </ul>
          <div style="margin:16px 0;padding:12px;background:#f9fafb;border-radius:6px;">
            <div style="font-weight:700;margin-bottom:8px;color:#1a1f36;">Cadence by season:</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85em;">
              <div><span class="badge blue">Mar-Jul</span> 10 attempts (15 days)</div>
              <div><span class="badge blue">Aug-Sep</span> 8 attempts (12 days)</div>
              <div><span class="badge blue">Oct</span> 7 attempts (10 days)</div>
              <div><span class="badge blue">Nov-Dec</span> 6 attempts (8 days)</div>
            </div>
            <div style="margin-top:12px;padding:10px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
              <strong style="color:#065f46;">Tag: "atlas"</strong><br>
              <span style="font-size:0.85em;color:#064e3b;">Assigned at Inbound MQL → Atlas detects and executes AI calling campaigns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-box" style="max-width:700px;margin:30px auto;">
      <div class="info-box-title">⚙️ Critical Conditional</div>
      <div class="info-box-content" style="font-family:monospace;">IF owner == "Mauricio Esparza" → Execute AI cadence<br>IF owner != "Mauricio Esparza" → Do NOT execute (human process)</div>
    </div>
    <div class="arrow-down">↓</div>
    <div style="text-align:center;font-weight:700;color:#4b5563;margin-bottom:20px;font-size:1.1em;">Possible Outcomes:</div>
    <div class="grid">
      <div class="stage shared">
        <div class="stage-header"><div class="stage-icon shared">📅</div><div class="stage-name">BOOKED</div></div>
        <div class="stage-content">Scheduled meeting during AI calls<ul class="stage-list" style="margin-top:8px;"><li>Stage: BOOKED</li><li>Owner → Sales Rep (round robin)</li><li>Tag changes: "atlas" → "outplay"</li><li><strong>AI Assist:</strong> Reminders sent</li></ul></div>
      </div>
      <div class="stage deal">
        <div class="stage-header"><div class="stage-icon deal">🎉</div><div class="stage-name">DEAL</div></div>
        <div class="stage-content">Signed contract during AI process<ul class="stage-list" style="margin-top:8px;"><li>Direct conversion</li><li><strong>100% AI close</strong></li><li>Proves AI to Tony ✓</li></ul></div>
      </div>
      <div class="stage end">
        <div class="stage-header"><div class="stage-icon end">❌</div><div class="stage-name">DISQUALIFIED</div></div>
        <div class="stage-content">With specific reason:<ul class="stage-list" style="margin-top:8px;"><li>Not interested</li><li>Wrong fit</li><li>Competitor</li></ul></div>
      </div>
      <div class="stage end">
        <div class="stage-header"><div class="stage-icon end">🗑️</div><div class="stage-name">JUNK LEAD</div></div>
        <div class="stage-content">Clearly fake/spam info<ul class="stage-list" style="margin-top:8px;"><li>Bad email format</li><li>Inconsistent data</li></ul></div>
      </div>
      <div class="stage shared">
        <div class="stage-header"><div class="stage-icon shared">📞</div><div class="stage-name">BAD CONTACT</div></div>
        <div class="stage-content">Phone doesn't work<ul class="stage-list" style="margin-top:8px;"><li>AI enriches data</li><li>If OK → ROUTING</li><li>If not → Disqualified</li></ul></div>
      </div>
      <div class="stage shared">
        <div class="stage-header"><div class="stage-icon shared">📵</div><div class="stage-name">UNRESPONSIVE</div></div>
        <div class="stage-content">Completed full cadence, never answered<ul class="stage-list" style="margin-top:8px;"><li><strong>DISQUALIFIED</strong></li><li>(BP &lt; 20 don't go to human)</li></ul></div>
      </div>
      <div class="stage shared" style="border-color:#f59e0b;background:linear-gradient(to bottom,#ffffff 0%,#fffbeb 100%);">
        <div class="stage-header"><div class="stage-icon shared" style="background:#f59e0b;">🪜</div><div class="stage-name">THE LADDER</div></div>
        <div class="stage-content">Cross-sell to partners<ul class="stage-list" style="margin-top:8px;"><li>Low fit for PTS</li><li>Good fit for partners</li><li>Referral program</li></ul></div>
      </div>
    </div>
  </div>

  <!-- ROUTING -->
  <div class="section">
    <div class="section-title">🔄 ROUTING - Transition Zone</div>
    <div class="flow" style="justify-content:center;">
      <div class="stage shared" style="max-width:600px;">
        <div class="stage-header"><div class="stage-icon shared">🔄</div><div class="stage-name">ROUTING</div></div>
        <div class="stage-content">
          <div style="padding:12px;background:#fef2f2;border-radius:6px;border:2px solid #ef4444;margin-bottom:16px;">
            <strong style="color:#991b1b;font-size:1em;">⚠️ ROUTING is NOT a working stage.</strong>
            <div style="color:#7f1d1d;font-size:0.9em;margin-top:4px;">It exists ONLY to assign owner. No sales work happens here.</div>
          </div>
          <strong>Purpose:</strong> Assign to human (bridge only)
          <div style="margin:16px 0;">
            <strong>Who arrives here:</strong>
            <ul class="stage-list">
              <li><strong>ALL leads with BP ≥ 20</strong> from Inbound MQL</li>
              <li>Bad Contact Info enriched successfully (from AI)</li>
              <li>AI raised hand (needs human support)</li>
            </ul>
          </div>
          <div style="margin:16px 0;padding:12px;background:#f9fafb;border-radius:6px;">
            <strong style="display:block;margin-bottom:8px;">What happens in ROUTING:</strong>
            <div style="margin-bottom:12px;padding:8px;background:#fef3c7;border-radius:4px;font-size:0.85em;border-left:3px solid #f59e0b;"><strong>Lead arrives WITH tag "outplay" already assigned</strong></div>
            <div class="timeline"><span class="timeline-badge">1</span><span>Assign owner → Sales Rep (round robin)</span></div>
            <div class="timeline"><span class="timeline-badge">2</span><span>Flag BP ≥ 50 as MAX PRIORITY</span></div>
            <div class="timeline"><span class="timeline-badge">3</span><span>Outplay detects tag "outplay" → assigns sequence</span></div>
            <div class="timeline"><span class="timeline-badge">4</span><span>First activity completed → moves to REACHING</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="warning-box" style="max-width:700px;margin:30px auto;">
      <div class="warning-box-title">⚠️ Important</div>
      <div class="warning-box-content">After ROUTING, owner = Sales Rep.<br>AI does NOT execute outreach (conditional: owner ≠ Mauricio)<br><strong>AI DOES execute:</strong> Meeting reminders for ALL booked meetings</div>
    </div>
  </div>

  <!-- REACHING HUMAN -->
  <div class="section">
    <div class="section-title">👤 REACHING - Human Domain (BP ≥ 20)</div>
    <div class="flow" style="justify-content:center;">
      <div class="stage human" style="max-width:600px;">
        <div class="stage-header"><div class="stage-icon human">👤</div><div class="stage-name">REACHING (Human Mode)</div></div>
        <div class="stage-owner">Owner: Sales Rep (Eric's Team) | BP ≥ 20</div>
        <div class="stage-content">
          <strong>Who arrives here:</strong>
          <ul class="stage-list">
            <li><strong>All leads with BP ≥ 20</strong> (from ROUTING after Inbound MQL)</li>
            <li>When human completed first Outplay task</li>
            <li>Special cases transferred from AI (BP &lt; 20 that booked)</li>
          </ul>
          <div style="margin:16px 0;">
            <strong>What happens:</strong>
            <ul class="stage-list">
              <li>Human executes sales process</li>
              <li>Outplay automates tasks (calls, emails, SMS)</li>
              <li>AI does NOT execute outreach (owner ≠ Mauricio)</li>
            </ul>
          </div>
          <div style="margin:16px 0;padding:12px;background:#faf5ff;border-radius:6px;border-left:3px solid #8b5cf6;">
            <strong style="color:#6d28d9;">🔥 Priority Flag:</strong>
            <div style="font-size:0.85em;color:#5b21b6;margin-top:4px;">Leads with BP ≥ 50 are flagged as <strong>MAX PRIORITY</strong><br>(Same lane, higher urgency for reps)</div>
          </div>
          <div style="margin:16px 0;padding:12px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
            <strong style="color:#065f46;">AI Assistance Active:</strong>
            <div style="font-size:0.85em;color:#064e3b;margin-top:4px;">✓ Meeting reminders (1 day, day of, 30 min before)<br>✓ Contract signature reminders<br>✓ Follow-up nudges</div>
          </div>
          <div style="margin:16px 0;padding:12px;background:#f9fafb;border-radius:6px;">
            <strong>Possible outcomes:</strong>
            <div style="font-size:0.9em;margin-top:8px;">
              <span class="badge green">BOOKED</span> Scheduled meeting<br>
              <span class="badge purple">DEAL</span> Signed contract (<strong>AI Assist</strong> - human closed with AI support)<br>
              <span class="badge red">DISQUALIFIED</span> With reason<br>
              <span class="badge amber">THE LADDER</span> Cross-sell to partner
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CALL TYPES -->
  <div class="section">
    <div class="section-title">📞 Call Types</div>
    <div class="flow" style="max-width:900px;margin:0 auto;">
      <div class="stage ai" style="flex:1;">
        <div class="stage-header"><div class="stage-icon ai">📤</div><div class="stage-name">OUTBOUND</div></div>
        <div class="stage-content">
          <strong>AI calls the lead (tag: "atlas")</strong>
          <ul class="stage-list" style="margin-top:12px;">
            <li>10 min post-form (if no action)</li>
            <li>During REACHING cadence</li>
            <li>Legal hour restrictions apply</li>
            <li>Owner: Mauricio</li>
          </ul>
          <div style="margin-top:12px;padding:8px;background:#f0fdf4;border-radius:4px;font-size:0.85em;"><strong>Campaign:</strong> Atlas Outbound MQL<br><strong>Trigger:</strong> Tag "atlas" detected</div>
        </div>
      </div>
      <div class="stage ai" style="flex:1;">
        <div class="stage-header"><div class="stage-icon ai">📥</div><div class="stage-name">INBOUND</div></div>
        <div class="stage-content">
          <strong>Lead requests call</strong>
          <ul class="stage-list" style="margin-top:12px;">
            <li>Click "Talk to AI agent" button</li>
            <li>Virtual number receives request</li>
            <li>Atlas calls immediately</li>
            <li>NO hour restrictions (inbound)</li>
          </ul>
          <div style="margin-top:12px;padding:8px;background:#f0fdf4;border-radius:4px;font-size:0.85em;"><strong>Campaign:</strong> Atlas Inbound (landing page)</div>
        </div>
      </div>
    </div>
  </div>

  <!-- KEY RULES SUMMARY -->
  <div class="section">
    <div class="section-title">📋 Key Rules Summary</div>
    <div class="grid">
      <div class="success-box">
        <div class="success-box-title">Owner = Mauricio (AI Lane)</div>
        <div class="success-box-content">
          <strong>Assigned to:</strong> Leads with BP &lt; 20<br>
          <strong>Tag:</strong> "atlas" (triggers Atlas AI calling)<br>
          <strong>From:</strong> Inbound MQL (after BP check)<br>
          <strong>Until:</strong>
          <ul style="margin:8px 0 0 20px;font-size:0.9em;">
            <li>Books meeting → Owner switches to rep (tag changes to "outplay")</li>
            <li>Signs contract → <strong>100% AI Close</strong> (proves AI to Tony)</li>
            <li>Gets disqualified or unresponsive</li>
          </ul>
        </div>
      </div>
      <div class="info-box">
        <div class="info-box-title">Owner = Sales Rep (Human Lane)</div>
        <div class="info-box-content">
          <strong>Assigned to:</strong> Leads with BP ≥ 20<br>
          <strong>Tag:</strong> "outplay" (triggers Outplay sequences)<br>
          <strong>From:</strong> ROUTING (immediately after Inbound MQL)<br>
          <strong>Until:</strong> Process closes
          <ul style="margin:8px 0 0 20px;font-size:0.9em;">
            <li>DEAL (<strong>AI Assist</strong> - human closed with AI support)</li>
            <li>Disposal Stages: DISQUALIFIED, JUNK LEAD, THE LADDER</li>
          </ul>
          <div style="margin-top:8px;padding:6px;background:#dbeafe;border-radius:4px;font-size:0.85em;"><strong>BP ≥ 50 = MAX PRIORITY flag</strong> (same lane, higher urgency)</div>
        </div>
      </div>
      <div class="warning-box">
        <div class="warning-box-title">Bank Products (BP) - Core Filter</div>
        <div class="warning-box-content">
          <strong>ONLY 2 routing tiers:</strong><br>
          • <strong>BP &lt; 20:</strong> AI handles entirely (test AI performance)<br>
          • <strong>BP ≥ 20:</strong> Human handles from start (via ROUTING)<br><br>
          <strong>Priority flag within human lane:</strong><br>
          BP ≥ 50 marked as MAX PRIORITY for reps<br><br>
          <strong>Owner Change:</strong> When lead books meeting → Round robin to Sales Rep
        </div>
      </div>
    </div>
    <div class="info-box" style="max-width:900px;margin:30px auto;">
      <div class="info-box-title">🤖 AI Assistance for ALL Meetings</div>
      <div class="info-box-content">
        <strong>AI executes meeting reminders regardless of owner or tag:</strong><br>
        • 1 day before meeting<br>• Day of meeting<br>• 30 minutes before meeting<br>• Contract signature reminders<br>• Follow-up nudges<br><br>
        <strong>Tracking for Tony (Trazabilidad):</strong><br>
        • <strong>100% AI Close:</strong> BP &lt; 20, tag "atlas", owner always Mauricio, signed contract<br>
        • <strong>AI Assist:</strong> Started tag "atlas", changed to "outplay" on booking, owner changed to rep, closed<br>
        • <strong>Human Close (AI support):</strong> BP ≥20, tag "outplay", owner always rep, closed with AI reminders
      </div>
    </div>
    <div class="success-box" style="max-width:900px;margin:30px auto;">
      <div class="success-box-title">🪜 THE LADDER Program</div>
      <div class="success-box-content">
        <strong>Purpose:</strong> Disposal stage for low-fit leads<br>
        <strong>Who goes here:</strong> Leads that are not a good fit for PTS but could work with partners<br>
        <strong>Action:</strong> Cross-sell / referral to PTS partner network<br>
        <strong>Available from:</strong> Both AI and Human lanes
      </div>
    </div>
  </div>

  <!-- SCORING SYSTEM -->
  <div class="section">
    <div class="section-title">📊 Lead Scoring System - Final Architecture</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:40px;">
      <div style="background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 100%);padding:24px;border-radius:12px;color:white;text-align:center;">
        <div style="font-size:2.5em;font-weight:700;margin-bottom:8px;">0–100</div>
        <div style="font-size:1.3em;font-weight:700;margin-bottom:12px;">SYSTEM SCORE</div>
        <div style="font-size:0.9em;line-height:1.6;opacity:0.95;">Automatic calculation<br>Cannot be edited manually<br><strong>Drives routing decisions</strong></div>
      </div>
      <div style="background:linear-gradient(135deg,#8b5cf6 0%,#6d28d9 100%);padding:24px;border-radius:12px;color:white;text-align:center;">
        <div style="font-size:2.5em;font-weight:700;margin-bottom:8px;">Variable</div>
        <div style="font-size:1.3em;font-weight:700;margin-bottom:12px;">FINAL SCORE</div>
        <div style="font-size:0.9em;line-height:1.6;opacity:0.95;">System Score ± Human Adjustment<br>Sales team feedback via dropdown<br><strong>Refines prioritization</strong></div>
      </div>
    </div>
    <div style="background:#f9fafb;padding:32px;border-radius:12px;margin-bottom:40px;">
      <div style="font-weight:700;font-size:1.3em;color:#1a1f36;margin-bottom:24px;text-align:center;">🎯 System Score Formula (0–100)</div>
      <div style="text-align:center;font-family:monospace;font-size:1.1em;background:white;padding:20px;border-radius:8px;margin-bottom:30px;border:2px solid #e5e7eb;">
        <strong>System Score = (ICP × 25%) + (Bank Products × 35%) + (Signals × 40%)</strong>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
        <div style="background:white;border:3px solid #3b82f6;border-radius:10px;padding:20px;">
          <div style="text-align:center;margin-bottom:12px;">
            <div style="width:50px;height:50px;background:#3b82f6;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:1.5em;">👤</div>
            <div style="font-weight:700;font-size:1em;color:#1e40af;">ICP LIKELY</div>
            <div style="font-size:2em;font-weight:700;color:#3b82f6;margin:8px 0;">25%</div>
          </div>
          <div style="font-size:0.85em;color:#4b5563;line-height:1.5;"><strong>Structural fit:</strong><br>• Independent Tax Preparer<br>• Tax-focused role/bio<br>• Business ownership<br>• Geographic location<br><br><div style="background:#eff6ff;padding:8px;border-radius:4px;text-align:center;font-weight:700;color:#1e40af;">Normalized to 0–100</div></div>
        </div>
        <div style="background:white;border:3px solid #10b981;border-radius:10px;padding:20px;">
          <div style="text-align:center;margin-bottom:12px;">
            <div style="width:50px;height:50px;background:#10b981;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:1.5em;">💰</div>
            <div style="font-weight:700;font-size:1em;color:#065f46;">BANK PRODUCTS</div>
            <div style="font-size:2em;font-weight:700;color:#10b981;margin:8px 0;">35%</div>
          </div>
          <div style="font-size:0.85em;color:#4b5563;line-height:1.5;"><strong>Scoring values (0–100):</strong><br>• Unicorn (200+) → 100<br>• Ideal (100–199) → 80<br>• Good (50–99) → 60<br>• Fair (20–49) → 40<br>• Borderline (1–19) → 20<br>• Low Fit (0) → 0<br><br><div style="background:#fef3c7;padding:10px;border-radius:6px;border-left:3px solid #f59e0b;margin-top:12px;"><strong style="color:#92400e;">Routing Decision:</strong><br><div style="margin-top:6px;">• <strong>BP &lt; 20</strong> → AI Lane<br>• <strong>BP ≥ 20</strong> → Human Lane</div></div></div>
        </div>
        <div style="background:white;border:3px solid #f59e0b;border-radius:10px;padding:20px;">
          <div style="text-align:center;margin-bottom:12px;">
            <div style="width:50px;height:50px;background:#f59e0b;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:1.5em;">⚡</div>
            <div style="font-weight:700;font-size:1em;color:#92400e;">SIGNALS</div>
            <div style="font-size:2em;font-weight:700;color:#f59e0b;margin:8px 0;">40%</div>
          </div>
          <div style="font-size:0.85em;color:#4b5563;line-height:1.5;"><strong>Engagement behavior:</strong><br>• Email opens/replies<br>• Call answered<br>• Interest shown<br>• Meeting booked<br>• No-shows (negative)<br><br><div style="background:#fffbeb;padding:8px;border-radius:4px;text-align:center;font-weight:700;color:#92400e;">Dynamic by funnel stage</div></div>
        </div>
      </div>
      <div style="margin-top:30px;max-width:600px;margin-left:auto;margin-right:auto;">
        <div style="font-weight:700;margin-bottom:16px;text-align:center;color:#1a1f36;">Example Calculation:</div>
        <div style="background:white;padding:16px;border-radius:8px;border:2px solid #e5e7eb;">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9em;"><span>ICP Score: 80 × 25%</span><strong>= 20</strong></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9em;"><span>BP Score: 60 × 35%</span><strong>= 21</strong></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:0.9em;padding-bottom:12px;border-bottom:2px solid #e5e7eb;"><span>Signals Score: 75 × 40%</span><strong>= 30</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:1.1em;font-weight:700;color:#3b82f6;"><span>System Score</span><span>71</span></div>
        </div>
      </div>
    </div>
    <div style="background:linear-gradient(to right,#fef3c7 0%,#fde68a 100%);padding:24px;border-radius:12px;margin-bottom:40px;border:3px solid #f59e0b;">
      <div style="font-weight:700;font-size:1.2em;color:#92400e;margin-bottom:16px;text-align:center;">🔧 Human Adjustment Layer</div>
      <div style="background:white;padding:20px;border-radius:8px;margin-bottom:16px;">
        <div style="font-weight:700;margin-bottom:12px;color:#1a1f36;">Sales Team Feedback (Dropdown):</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:0.9em;">
          <div style="padding:8px;background:#d1fae5;border-radius:4px;border-left:3px solid #10b981;"><strong>Strong Fit</strong> → +15</div>
          <div style="padding:8px;background:#fee2e2;border-radius:4px;border-left:3px solid #ef4444;"><strong>No Decision Maker</strong> → -20</div>
          <div style="padding:8px;background:#fee2e2;border-radius:4px;border-left:3px solid #ef4444;"><strong>Price Objection</strong> → -10</div>
          <div style="padding:8px;background:#fee2e2;border-radius:4px;border-left:3px solid #ef4444;"><strong>Wrong Fit</strong> → -30</div>
          <div style="padding:8px;background:#fee2e2;border-radius:4px;border-left:3px solid #ef4444;"><strong>Bad Data</strong> → -40</div>
          <div style="padding:8px;background:#fef3c7;border-radius:4px;border-left:3px solid #f59e0b;"><strong>Seasonality</strong> → Variable</div>
        </div>
      </div>
      <div style="text-align:center;font-family:monospace;font-size:1.1em;background:white;padding:16px;border-radius:8px;border:2px solid #f59e0b;">
        <strong>Final Score = System Score (71) + Human Adjustment (+15) = 86</strong>
      </div>
    </div>
    <div class="core-rule">
      <strong style="font-size:1.2em;">🔐 Governance Rules (Non-Negotiable)</strong><br><br>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;">
        <div><strong style="color:#10b981;">✅ ALLOWED:</strong><br>• Sales team applies feedback dropdown<br>• Human adjustment modifies Final Score<br>• Adjustments logged for analysis</div>
        <div><strong style="color:#ef4444;">❌ FORBIDDEN:</strong><br>• Manual editing of System Score<br>• Changing ICP/BP/Signals directly<br>• Bypassing dropdown with custom values</div>
      </div>
      <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.3);border-radius:8px;"><strong>🎯 CRITICAL:</strong> Routing decisions are based ONLY on <strong>System Score</strong>.<br>Human Adjustment refines prioritization but does NOT change routing logic.</div>
    </div>
    <div style="margin-top:40px;">
      <div style="font-weight:700;font-size:1.2em;color:#1a1f36;margin-bottom:20px;text-align:center;">📊 How Scores Are Used</div>
      <div class="grid">
        <div style="background:#eff6ff;border:2px solid #3b82f6;border-radius:10px;padding:20px;">
          <div style="font-weight:700;font-size:1.1em;color:#1e40af;margin-bottom:12px;">SYSTEM SCORE</div>
          <div style="font-size:0.9em;color:#1e3a8a;line-height:1.6;"><strong>Purpose:</strong> Routing decisions<br><br><strong>BP Threshold (Only 2 tiers):</strong><br>• BP &lt; 20 → AI Lane<br>• BP ≥ 20 → Human Lane<br><br><div style="background:#dbeafe;padding:8px;border-radius:4px;margin-top:8px;"><strong>Cannot be overridden</strong></div></div>
        </div>
        <div style="background:#faf5ff;border:2px solid #8b5cf6;border-radius:10px;padding:20px;">
          <div style="font-weight:700;font-size:1.1em;color:#6d28d9;margin-bottom:12px;">FINAL SCORE</div>
          <div style="font-size:0.9em;color:#5b21b6;line-height:1.6;"><strong>Purpose:</strong> Sales prioritization<br><br>• Call order within queue<br>• Resource allocation<br>• Performance tracking<br><br><div style="background:#ede9fe;padding:8px;border-radius:4px;margin-top:8px;"><strong>Reflects real sales intel</strong></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- OPERATIONAL CLARITY -->
  <div class="section">
    <div class="section-title">🧠 Operational Clarity - Who Does What</div>
    <div class="grid">
      <div class="info-box">
        <div class="info-box-title">Krystal (Marketing / GTM Owner)</div>
        <div class="info-box-content">
          <strong>Your domain: Everything BEFORE Inbound MQL</strong><br>
          • Meta campaigns optimization (Cost per MQL)<br>• Facebook Pixel tracking (visitors → conversions)<br>• Copy: SMS + Cold emails<br>• Landing page performance<br><br>
          <strong>Your boundary: Inbound MQL = handoff point</strong><br>
          After lead enters Inbound MQL → Automation + Sales take over<br><br>
          <strong>How to act on bot outputs:</strong>
          <div style="margin-top:8px;padding:10px;background:#eff6ff;border-radius:6px;font-size:0.9em;">
            <strong>IF</strong> bot detects: "Bad Contact Info" →<br><strong>YOU:</strong> Review form quality, check for spam sources<br><br>
            <strong>IF</strong> bot detects: "Low engagement" (unresponsive) →<br><strong>YOU:</strong> Check landing page message match, SMS timing<br><br>
            <strong>IF</strong> bot detects: "Junk Lead" pattern →<br><strong>YOU:</strong> Audit Meta targeting, exclude low-quality audiences<br><br>
            <strong>IF</strong> System Score &lt; 40 consistently →<br><strong>YOU:</strong> Revisit ICP targeting in Meta campaigns
          </div>
          <div style="margin-top:12px;padding:10px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
            <strong style="color:#065f46;">✓ Your success metric:</strong><br>
            <span style="font-size:0.9em;color:#064e3b;">Cost per Inbound MQL with System Score ≥ 60<br>(Quality leads, not just volume)</span>
          </div>
          <div style="margin-top:12px;padding:10px;background:#fef3c7;border-radius:6px;border-left:3px solid #f59e0b;">
            <strong style="color:#92400e;">📊 Pre-scale checklist:</strong>
            <div style="font-size:0.85em;color:#78350f;margin-top:6px;line-height:1.6;">□ Pixel firing on all 3 landing page buttons<br>□ SMS copy approved by PTS team<br>□ 80%+ of leads have System Score ≥ 50<br>□ "Junk Lead" rate &lt; 15%<br>□ Cost per MQL trending down week-over-week</div>
          </div>
          <div style="margin-top:12px;padding:10px;background:#ede9fe;border-radius:6px;border-left:3px solid #8b5cf6;">
            <strong style="color:#6d28d9;">💬 Feedback channel:</strong><br>
            <span style="font-size:0.9em;color:#5b21b6;">Google Chat: "GTM Alignment"<br>For: Bot output patterns, targeting issues, copy adjustments</span>
          </div>
        </div>
      </div>
      <div class="success-box">
        <div class="success-box-title">Automation (Jason / Yeison)</div>
        <div class="success-box-content">
          <strong>Responsible for:</strong><br>
          • BP calculation accuracy<br>• Owner-based conditional logic<br>• Tag assignment: "atlas" (BP &lt; 20) vs "outplay" (BP ≥ 20)<br>• Atlas + Outplay campaign triggers<br>• Owner-switch on booking<br>• AI reminders execution<br><br>
          <strong>Critical Rule:</strong>
          <div style="padding:8px;background:#d1fae5;border-radius:4px;margin-top:8px;font-family:monospace;font-size:0.9em;">AI executes ONLY if owner == "Mauricio Esparza"<br>Tag "atlas" → AI calls<br>Tag "outplay" → Human sequence</div>
        </div>
      </div>
      <div class="warning-box">
        <div class="warning-box-title">Sales Team (Eric's Team)</div>
        <div class="warning-box-content">
          <strong>Responsible for:</strong><br>
          • Leads with BP ≥ 20 ONLY<br>• Manual sales execution in REACHING (Human Mode)<br>• Updating stage properly<br>• Providing feedback on lead quality<br><br>
          <strong>Must NOT:</strong><br>
          • Touch BP &lt; 20 leads<br>• Manually change owner unless approved<br>• Skip ROUTING stage
        </div>
      </div>
    </div>
    <div style="margin-top:30px;padding:20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:10px;color:white;text-align:center;">
      <strong style="font-size:1.1em;display:block;margin-bottom:8px;">💡 The Golden Rule</strong>
      <div style="font-size:0.95em;line-height:1.6;">Owner confusion → Manual override chaos → System breaks<br><strong>This section removes confusion before it starts.</strong></div>
    </div>
  </div>

  <div class="footer">
    <div class="footer-row"><strong>Version:</strong> v2 - Operational Clarity Edition</div>
    <div class="footer-row"><strong>Last updated:</strong> April 22, 2026</div>
    <div class="footer-row"><strong>Approved by:</strong> Mauricio Esparza (CEO, LoopHub)</div>
    <div class="footer-row"><strong>Launch date:</strong> May 1, 2026 (GO/NO-GO with Tony required)</div>
    <div class="footer-row" style="margin-top:16px;color:#9ca3af;font-size:0.85em;">Peak season: May to December | Team: Eric (Sales), Jason/Yeison (Automation), Alex (Tech), Crystal (Marketing)</div>
    <div class="footer-row" style="margin-top:12px;padding:12px;background:#f3f4f6;border-radius:6px;font-size:0.85em;"><strong>Document Purpose:</strong> Complete operating manual with role clarity to prevent owner confusion and manual override chaos</div>
  </div>
</div>
`;

export default function MasterPTSWorkflow() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
    />
  );
}
