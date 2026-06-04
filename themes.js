// WASTELAND PANZER — THEMES
// Neues Theme: Objekt ins Array, alles andere passiert automatisch.
const WP_THEMES = [
  {
    id: 'amber', label: '🌙 AMBER',
    vars: {
      '--bg0':'#050505','--bg1':'#0a0a0a','--bg2':'#111111','--bg3':'#1a1a1a',
      '--amber':'#ffaa00','--adim':'#664400','--afaint':'#1a0e00',
      '--text':'#ccaa77','--tb':'#ffcc88',
      '--glow-hi':'rgba(255,170,0,0.6)','--glow-md':'rgba(255,170,0,0.5)',
      '--glow-lo':'rgba(255,170,0,0.4)','--glow-bg':'rgba(255,170,0,0.06)',
      '--glow-box':'rgba(255,170,0,0.15)','--glow-press':'rgba(255,170,0,0.12)',
      '--glow-canvas-hi':'rgba(255,170,0,0.9)','--glow-canvas-ring':'rgba(255,170,0,0.3)',
      '--glow-canvas-dim':'rgba(255,170,0,0.1)','--glow-canvas-fill':'rgba(255,170,0,0.12)',
      '--glow-canvas-spoke':'rgba(255,170,0,0.15)',
      '--canvas-dot':'#ffaa00','--canvas-label':'#ccaa77','--canvas-val':'#ffcc88',
      '--radius':'0px'
    }
  },
  {
    id: 'panzer', label: '☢️ PANZER',
    vars: {
      '--bg0':'#050505','--bg1':'#0a0a0a','--bg2':'#111111','--bg3':'#1a1a1a',
      '--amber':'#ff4444','--adim':'#662222','--afaint':'#1a0808',
      '--text':'#cccccc','--tb':'#eeeeee',
      '--glow-hi':'rgba(255,68,68,0.6)','--glow-md':'rgba(255,68,68,0.5)',
      '--glow-lo':'rgba(255,68,68,0.4)','--glow-bg':'rgba(255,68,68,0.06)',
      '--glow-box':'rgba(255,68,68,0.15)','--glow-press':'rgba(255,68,68,0.12)',
      '--glow-canvas-hi':'rgba(255,68,68,0.9)','--glow-canvas-ring':'rgba(255,68,68,0.3)',
      '--glow-canvas-dim':'rgba(255,68,68,0.1)','--glow-canvas-fill':'rgba(255,68,68,0.12)',
      '--glow-canvas-spoke':'rgba(255,68,68,0.15)',
      '--canvas-dot':'#ff4444','--canvas-label':'#cccccc','--canvas-val':'#ff8888',
      '--radius':'4px'
    }
  },
  {
    id: 'toxic', label: '☣️ TOXIC',
    vars: {
      '--bg0':'#050505','--bg1':'#0a0a0a','--bg2':'#111111','--bg3':'#1a1a1a',
      '--amber':'#44ff88','--adim':'#226644','--afaint':'#0a1a0e',
      '--text':'#ccffdd','--tb':'#aaffcc',
      '--glow-hi':'rgba(68,255,136,0.6)','--glow-md':'rgba(68,255,136,0.5)',
      '--glow-lo':'rgba(68,255,136,0.4)','--glow-bg':'rgba(68,255,136,0.06)',
      '--glow-box':'rgba(68,255,136,0.15)','--glow-press':'rgba(68,255,136,0.12)',
      '--glow-canvas-hi':'rgba(68,255,136,0.9)','--glow-canvas-ring':'rgba(68,255,136,0.3)',
      '--glow-canvas-dim':'rgba(68,255,136,0.1)','--glow-canvas-fill':'rgba(68,255,136,0.12)',
      '--glow-canvas-spoke':'rgba(68,255,136,0.15)',
      '--canvas-dot':'#44ff88','--canvas-label':'#aaffcc','--canvas-val':'#ccffdd',
      '--radius':'2px'
    }
  },
  {
    id: 'telekom', label: '📶 TELEKOM',
    vars: {
      '--bg0':'#f5f5f5','--bg1':'#ebebeb','--bg2':'#dcdcdc','--bg3':'#cccccc',
      '--amber':'#e20074','--adim':'#b0005a','--afaint':'#fce8f3',
      '--text':'#333333','--tb':'#111111',
      '--glow-hi':'rgba(226,0,116,0.7)','--glow-md':'rgba(226,0,116,0.55)',
      '--glow-lo':'rgba(226,0,116,0.4)','--glow-bg':'rgba(226,0,116,0.07)',
      '--glow-box':'rgba(226,0,116,0.18)','--glow-press':'rgba(226,0,116,0.14)',
      '--glow-canvas-hi':'rgba(226,0,116,0.95)','--glow-canvas-ring':'rgba(226,0,116,0.35)',
      '--glow-canvas-dim':'rgba(226,0,116,0.12)','--glow-canvas-fill':'rgba(226,0,116,0.1)',
      '--glow-canvas-spoke':'rgba(226,0,116,0.18)',
      '--canvas-dot':'#e20074','--canvas-label':'#666666','--canvas-val':'#e20074',
      '--radius':'4px'
    }
  },
  {
    id: 'leber_retter', label: '🌿 LEBER-RETTER',
    vars: {
      '--bg0':'#040705','--bg1':'#0a100c','--bg2':'#121d16','--bg3':'#1b2b21',
      '--amber':'#58a673','--adim':'#2d593d','--afaint':'#0a140e',
      '--text':'#e2eed8','--tb':'#b2cca2',
      '--glow-hi':'rgba(88,166,115,0.5)','--glow-md':'rgba(88,166,115,0.4)',
      '--glow-lo':'rgba(88,166,115,0.3)','--glow-bg':'rgba(88,166,115,0.05)',
      '--glow-box':'rgba(88,166,115,0.12)','--glow-press':'rgba(88,166,115,0.1)',
      '--glow-canvas-hi':'rgba(88,166,115,0.8)','--glow-canvas-ring':'rgba(88,166,115,0.25)',
      '--glow-canvas-dim':'rgba(88,166,115,0.08)','--glow-canvas-fill':'rgba(88,166,115,0.1)',
      '--glow-canvas-spoke':'rgba(88,166,115,0.12)',
      '--canvas-dot':'#58a673','--canvas-label':'#b2cca2','--canvas-val':'#ffffff',
      '--radius':'6px'
    }
  },
  {
    id: 'db_infra', label: '🎛️ STELLWERK',
    vars: {
      '--bg0':'#0f1112','--bg1':'#16191b','--bg2':'#212529','--bg3':'#2d3238',
      '--amber':'#ff0000','--adim':'#990000','--afaint':'#240505',
      '--text':'#e9ecef','--tb':'#f8f9fa',
      '--glow-hi':'rgba(255,0,0,0.6)','--glow-md':'rgba(255,0,0,0.5)',
      '--glow-lo':'rgba(255,0,0,0.4)','--glow-bg':'rgba(255,0,0,0.06)',
      '--glow-box':'rgba(255,0,0,0.15)','--glow-press':'rgba(255,0,0,0.12)',
      '--glow-canvas-hi':'rgba(255,0,0,0.9)','--glow-canvas-ring':'rgba(255,0,0,0.3)',
      '--glow-canvas-dim':'rgba(255,0,0,0.1)','--glow-canvas-fill':'rgba(255,0,0,0.12)',
      '--glow-canvas-spoke':'rgba(255,0,0,0.15)',
      '--canvas-dot':'#ff0000','--canvas-label':'#ced4da','--canvas-val':'#ffffff',
      '--radius':'2px'
    }
  },
  {
    id: 'isekai', label: '🪐` ISEKAI OP',
    vars: {
      '--bg0':'#020205','--bg1':'#06060c','--bg2':'#0d0d1a','--bg3':'#14142b',
      '--amber':'#8844ff','--adim':'#4411aa','--afaint':'#0f0521',
      '--text':'#ddeeff','--tb':'#99ccff',
      '--glow-hi':'rgba(136,68,255,0.7)','--glow-md':'rgba(136,68,255,0.55)',
      '--glow-lo':'rgba(136,68,255,0.4)','--glow-bg':'rgba(136,68,255,0.08)',
      '--glow-box':'rgba(136,68,255,0.18)','--glow-press':'rgba(136,68,255,0.14)',
      '--glow-canvas-hi':'rgba(136,68,255,0.95)','--glow-canvas-ring':'rgba(136,68,255,0.35)',
      '--glow-canvas-dim':'rgba(136,68,255,0.12)','--glow-canvas-fill':'rgba(136,68,255,0.15)',
      '--glow-canvas-spoke':'rgba(136,68,255,0.18)',
      '--canvas-dot':'#8844ff','--canvas-label':'#aaccff','--canvas-val':'#ccddee',
      '--radius':'3px'
    }
  }
];
