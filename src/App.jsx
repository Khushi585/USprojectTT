import React, { useEffect, useMemo, useRef, useState } from 'react';
import './styles.css';

const vision = 'https://www.visioncabinethardware.in/cdn/shop/';
const products = [
  { id: 'arbor', type: 'pull', name: 'Arbor Cabinet Pull', collection: 'Linear collection · solid brass', detail: 'A sculptural everyday favorite', tag: 'Bestseller', image: `${vision}files/arbor-premium-solid-brass-handcrafted-cabinet-pull-antique-bronze-_1.webp?v=1790495196`, alt: 'Arbor solid brass cabinet pull in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Gunmetal'] },
  { id: 'amber', type: 'knob', name: 'Amber Round Knob', collection: 'Knurled collection · solid brass', detail: 'A little texture, a lot of character', tag: 'Made to mix', image: `${vision}files/amber-round-knurling-cabinet-knob-antique-bronze-_1.webp?v=1779105807`, alt: 'Amber round knurled cabinet knob in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Black'] },
  { id: 'arion', type: 'pull', name: 'Arion Knurled Pull', collection: 'Linear knurled · solid brass', detail: 'Precision-cut, easy to reach for', tag: 'Tactile by design', image: `${vision}files/arion-knurled-cabinet-handle-antique-bronze-_1.webp?v=1779104613`, alt: 'Arion linear knurled cabinet pull in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Gunmetal'] },
  { id: 'plume', type: 'appliance', name: 'Plume Appliance Pull', collection: 'Curve collection · solid brass', detail: 'A confident accent for larger fronts', tag: 'Room-making scale', image: `${vision}files/plume-premium-solid-brass-handcrafted-appliance-pull-antique-bronze-_1.webp?v=1785934424`, alt: 'Plume solid brass appliance pull in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Black'] },
  { id: 'alpha', type: 'pull', name: 'Alpha Half-Round Pull', collection: 'Half-round collection · solid brass', detail: 'A smooth, softened silhouette', tag: 'Quietly sculptural', image: `${vision}files/alpha-half-moon-brass-cabinet-pull-antique-bronze-_3.webp?v=1779105115`, alt: 'Alpha half-round solid brass cabinet pull in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Black'] },
  { id: 'apex', type: 'knob', name: 'Apex Round-Plate Knob', collection: 'Linear knurled · solid brass', detail: 'Texture meets a classic profile', tag: 'Sculpted detail', image: `${vision}files/apex-linear-knurled-round-brass-cabinet-knob-with-round-plate-antique-bronze-_1.webp?v=1779105198`, alt: 'Apex linear knurled cabinet knob in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Silver'] },
  { id: 'bloom', type: 'lip', name: 'Bloom Edge Lip Pull', collection: 'Edge collection · solid brass', detail: 'A clean line for modern fronts', tag: 'Minimal profile', image: `${vision}files/bloom-edge-lip-pull-handle-antique-bronze-_1.webp?v=1779104460`, alt: 'Bloom Edge brass lip pull in antique bronze', finishes: ['Antique Bronze', 'Gold', 'Black'] },
  { id: 'scallop', type: 'door', name: 'Scallop Entry Handle', collection: 'Architectural collection · solid brass', detail: 'Sculptural form for the entry', tag: 'A statement piece', image: `${vision}files/scallop-premium-solid-brass-handcrafted-door-handle-antique-bronze-_1.webp?v=1786861923`, alt: 'Scallop handcrafted solid brass door handle in antique bronze', finishes: ['Antique Bronze', 'Gold'] },
  { id: 'calyx', type: 'door', name: 'Calyx Door Handle', collection: 'Architectural collection · solid brass', detail: 'A fluid, fluted profile', tag: 'Handcrafted form', image: `${vision}files/calyx-premium-solid-brass-handcrafted-door-handle-antique-bronze-_1.webp?v=1786163089`, alt: 'Calyx handcrafted solid brass door handle in antique bronze', finishes: ['Antique Bronze', 'Gold'] },
  { id: 'grainley', type: 'door', name: 'Grainley Entry Handle', collection: 'Architectural collection · solid brass', detail: 'Natural lines, warm character', tag: 'Organic texture', image: `${vision}files/grainley-premium-solid-brass-handcrafted-semi-circle-door-handle-antique-bronze-_1.webp?v=1786015282`, alt: 'Grainley handcrafted semi-circle door handle in antique bronze', finishes: ['Antique Bronze', 'Gold'] },
  { id: 'solis', type: 'door', name: 'Solis Sunburst Handle', collection: 'Architectural collection · solid brass', detail: 'A distinctive welcome home', tag: 'Made for the moment', image: `${vision}files/solis-premium-solid-brass-handcrafted-sunburst-door-handle-antique-bronze-_1.webp?v=1786023662`, alt: 'Solis handcrafted sunburst entry door handle in antique bronze', finishes: ['Antique Bronze', 'Gold'] },
  { id: 'meander', type: 'appliance', name: 'Meander Appliance Pull', collection: 'Sculpted collection · solid brass', detail: 'Organic texture at a larger scale', tag: 'For statement cabinetry', image: `${vision}files/meander-premium-solid-brass-handcrafted-appliance-pull-antique-bronze-_1.webp?v=1787052474`, alt: 'Meander handcrafted solid brass appliance pull in antique bronze', finishes: ['Antique Bronze', 'Gold'] },
];

const sizeReferences = [
  { mm: 76.2, inch: '3 in' }, { mm: 96, inch: '3 25/32 in' }, { mm: 128, inch: '5 1/16 in' },
  { mm: 160, inch: '6 5/16 in' }, { mm: 192, inch: '7 9/16 in' }, { mm: 224, inch: '8 13/16 in' },
  { mm: 256, inch: '10 1/16 in' }, { mm: 304.8, inch: '12 in' },
];
const verifiedDimensions = {
  arion: [{ name: 'Small', ctcIn: '5.00', ctcMm: 128, lengthIn: '6.60', lengthMm: 168 }, { name: 'Medium', ctcIn: '6.30', ctcMm: 160, lengthIn: '8.00', lengthMm: 200 }, { name: 'Large', ctcIn: '9.00', ctcMm: 224, lengthIn: '10.40', lengthMm: 264 }],
  plume: [{ name: 'Appliance pull', ctcIn: '10.00', ctcMm: 254, lengthIn: '14.88', lengthMm: 378, widthMm: 55, heightMm: 44 }],
  scallop: [{ name: 'Door handle', ctcIn: '4.25', ctcMm: 108, lengthIn: '7.01', lengthMm: 180, widthMm: 125, heightMm: 35 }],
  grainley: [{ name: '6 in', ctcIn: '4.00', ctcMm: 102, lengthIn: '6.00', lengthMm: 152, heightMm: 35 }, { name: '8 in', ctcIn: '5.00', ctcMm: 127, lengthIn: '8.00', lengthMm: 203, heightMm: 35 }],
  solis: [{ name: 'Sunburst pull', ctcIn: '4.92', ctcMm: 125, lengthIn: '7.67', lengthMm: 195, heightMm: 44 }],
  meander: [{ name: 'Appliance pull', ctcIn: '9.52', ctcMm: 242, lengthIn: '11.41', lengthMm: 290, widthMm: 46, heightMm: 45 }],
};
const dimensionOptionLabel = size => `${size.name} · ${size.ctcIn} in / ${size.ctcMm} mm CTC`;
const categories = [
  { id: 'all', label: 'All favorites' }, { id: 'pull', label: 'Cabinet pulls' }, { id: 'knob', label: 'Knobs' },
  { id: 'appliance', label: 'Appliance pulls' }, { id: 'lip', label: 'Lip pulls' }, { id: 'door', label: 'Door hardware' },
];
const collections = [
  { id: 'cabinet', title: 'Cabinet hardware', image: `${vision}collections/Gold_f057325b-a222-47b2-8652-e9ddb31eb08e.webp?v=1779106593`, alt: 'Cabinet hardware collection in warm gold finish' },
  { id: 'door', title: 'Door hardware', image: `${vision}files/Banner-2.webp?v=1790761524`, alt: 'Sculptural architectural door hardware' },
  { id: 'knob', title: 'Cabinet knobs', image: products[1].image, alt: products[1].alt },
  { id: 'appliance', title: 'Appliance pulls', image: `${vision}files/Elevate_Every_Detail.webp?v=1791345260`, alt: 'Appliance hardware in a finished interior' },
];

const Icon = ({ name }) => {
  if (name === 'search') return <svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
  if (name === 'account') return <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M4.8 21c.5-4.1 3-6.2 7.2-6.2s6.7 2.1 7.2 6.2"/></svg>;
  if (name === 'bag') return <svg viewBox="0 0 24 24"><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>;
  return <svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>;
};

function Header({ bagCount, onSearch, onBag }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [['Collections', '#collections'], ['Kitchen looks', '#kitchen-visualizer'], ['Find your fit', '#size-finder'], ['Cabinet hardware', '#shop'], ['Finishes', '#finishes'], ['Our craft', '#craft'], ['Trade', '#trade']];
  return <>
    <div className="announce">Handmade solid brass, shaped with care <span>·</span> <a href="#collections">Discover the collection</a></div>
    <header className="header">
      <a className="brand" href="#top" aria-label="Sunhaven Brass home"><span className="brandmark">S</span><span><span className="brand-name">SUNHAVEN BRASS</span><span className="brand-sub">HANDMADE SOLID BRASS</span></span></a>
      <nav className="nav" aria-label="Main navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
      <div className="header-actions">
        <button className="icon-btn" aria-label="Search" onClick={onSearch}><Icon name="search"/></button>
        <button className="icon-btn" aria-label="Your account" onClick={() => window.location.href = 'mailto:info@visioncabinethardware.com?subject=Account%20enquiry'}><Icon name="account"/></button>
        <button className="icon-btn" aria-label="Open project list" onClick={onBag}><Icon name="bag"/><span className="bag-count">{bagCount}</span></button>
        <button className="icon-btn menu-btn" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu"/></button>
      </div>
    </header>
    <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
  </>;
}

function ProductCard({ product, finish, onFinish, onOpen, onVisualize }) {
  const swatchClass = (name) => ({ Gold: 'gold', 'Antique Bronze': 'bronze', Gunmetal: 'gunmetal', Silver: 'gunmetal', Black: 'black' }[name] || 'bronze');
  return <article className="product">
    <div className="product-visual" onClick={() => onOpen(product)} role="button" tabIndex={0} onKeyDown={event => event.key === 'Enter' && onOpen(product)}>
      <img src={product.image} alt={product.alt} loading="lazy"/><span className="product-tag">{product.tag}</span>
      <button className="quick-add" onClick={event => { event.stopPropagation(); onOpen(product); }}>Choose options&nbsp; +</button>
    </div>
    <div className="product-info"><div className="product-meta">Handmade · {product.collection}</div><h3 className="product-name">{product.name}</h3>
      <div className="product-bottom"><span className="product-spec">{product.detail}</span><span className="price">View details</span></div>
      <div className="swatch-row" aria-label="Available finishes">{product.finishes.map(name => <button key={name} className={`swatch ${swatchClass(name)}${finish === name ? ' selected' : ''}`} aria-label={`${name} finish`} title={name} onClick={() => onFinish(product.id, name)}/>)}</div>
      <button className="product-visualize" onClick={() => onVisualize(product, finish)}>See it in a kitchen <span>↗</span></button>
    </div>
  </article>;
}

const kitchenLooks = [
  { id: 'sage', name: 'Sage green shaker', note: 'Warm and timeless', cabinet: '#758876', edge: '#536956', wall: '#ebe8df', tile: '#f8f7f2', counter: '#d5d0c4' },
  { id: 'white', name: 'Crisp white modern', note: 'Clean, quiet contrast', cabinet: '#f6f4ee', edge: '#d2d0c8', wall: '#e9ebea', tile: '#fffefa', counter: '#41474a' },
  { id: 'navy', name: 'Deep navy shaker', note: 'Bold and considered', cabinet: '#243b54', edge: '#142a3d', wall: '#e8e5dc', tile: '#f8f6f0', counter: '#d8d2c6' },
];

function KitchenScene({ look, finish, knob }) {
  const hardware = ({ Gold: '#c49a48', 'Antique Bronze': '#71533b', Gunmetal: '#63696b', Silver: '#a8a9a4', Black: '#252a2b' }[finish] || '#c49a48');
  const handle = (x, y, vertical = true, key = '') => knob
    ? <g key={key}><circle cx={x} cy={y} r="7" fill={hardware} stroke="#0002" strokeWidth="1"/><circle cx={x - 2} cy={y - 2} r="1.5" fill="#fff8"/></g>
    : <g key={key}><rect x={vertical ? x - 3 : x} y={vertical ? y : y - 3} width={vertical ? 6 : 34} height={vertical ? 34 : 6} rx="3" fill={hardware}/><circle cx={vertical ? x : x + 4} cy={vertical ? y + 4 : y} r="2.4" fill="#f8e4b8"/><circle cx={vertical ? x : x + 30} cy={vertical ? y + 30 : y} r="2.4" fill="#f8e4b8"/></g>;
  const upperDoors = [28, 231, 434, 637];
  const lowerDoors = [225, 430, 635];
  return <svg className="kitchen-scene" viewBox="0 0 860 430" role="img" aria-label={`${look.name} kitchen with ${finish} cabinet hardware`}>
    <defs><pattern id={`tile-${look.id}`} width="48" height="38" patternUnits="userSpaceOnUse"><rect width="48" height="38" fill={look.tile}/><path d="M48 0H0V38" fill="none" stroke="#d9d8d0" strokeWidth="1"/></pattern><filter id={`shadow-${look.id}`} x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1d231f" floodOpacity=".13"/></filter></defs>
    <rect width="860" height="430" fill={look.wall}/><rect x="0" y="169" width="860" height="72" fill={`url(#tile-${look.id})`}/>
    <g filter={`url(#shadow-${look.id})`}>
      {upperDoors.map((x, i) => <g key={x}><rect x={x} y="25" width="188" height="144" fill={look.cabinet} stroke={look.edge} strokeWidth="3"/><rect x={x + 12} y="37" width="164" height="120" fill="none" stroke={look.edge} strokeWidth="2"/>{handle(i % 2 ? x + 20 : x + 168, 101, true, `upper-${x}`)}</g>)}
      <rect x="0" y="238" width="860" height="13" fill={look.counter}/><rect x="0" y="251" width="860" height="7" fill="#bcb4a4"/>
      {[0, 1, 2].map(i => <g key={`drawer-${i}`}><rect x="28" y={263 + i * 52} width="177" height="48" fill={look.cabinet} stroke={look.edge} strokeWidth="3"/><path d={`M40 ${271 + i * 52}h153v32H40z`} fill="none" stroke={look.edge} strokeWidth="1.5"/>{handle(99, 287 + i * 52, false, `drawer-pull-${i}`)}</g>)}
      {lowerDoors.map((x, i) => <g key={`lower-${x}`}><rect x={x} y="263" width="190" height="152" fill={look.cabinet} stroke={look.edge} strokeWidth="3"/><rect x={x + 12} y="275" width="166" height="128" fill="none" stroke={look.edge} strokeWidth="2"/>{handle(i % 2 ? x + 20 : x + 170, 315, true, `lower-pull-${x}`)}</g>)}
    </g>
    <g className="kitchen-decor"><rect x="356" y="211" width="48" height="26" rx="2" fill="#f3f0e9"/><rect x="365" y="218" width="30" height="19" fill="#cbc5b8"/><path d="M680 237v-34m0 22c-19-4-20-18-9-19 8 0 9 9 9 19m0-8c18-8 22-22 10-23-9 0-10 12-10 23m0 19h30" fill="none" stroke="#73906c" strokeWidth="4" strokeLinecap="round"/><rect x="700" y="226" width="23" height="12" rx="3" fill="#c8bda7"/></g>
  </svg>;
}

function KitchenPhotoPreview({ product, finish }) {
  const [photo, setPhoto] = useState('');
  const [placement, setPlacement] = useState({ x: 50, y: 50 });
  const [horizontal, setHorizontal] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => { if (!photo) return undefined; return () => URL.revokeObjectURL(photo); }, [photo]);
  const uploadPhoto = event => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    setPhoto(URL.createObjectURL(file));
    setPlacement({ x: 50, y: 50 });
  };
  const placeHardware = event => {
    if (!photo) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setPlacement({ x: Math.max(4, Math.min(96, ((event.clientX - bounds.left) / bounds.width) * 100)), y: Math.max(7, Math.min(93, ((event.clientY - bounds.top) / bounds.height) * 100)) });
  };
  const finishColor = ({ Gold: '#c49a48', 'Antique Bronze': '#71533b', Gunmetal: '#63696b', Silver: '#a8a9a4', Black: '#252a2b' }[finish] || '#c49a48');
  const isKnob = product.type === 'knob';
  return <div className="photo-tryon">
    <div className="photo-tryon-head"><div><span className="section-label">Your room, your choice</span><h3>Try it on your kitchen.</h3><p>Upload a photo, then click where you would place the hardware. The preview stays on this device.</p></div><div className="photo-actions"><input ref={inputRef} className="photo-file-input" type="file" accept="image/*" onChange={uploadPhoto} aria-label="Choose a kitchen photo"/><button className="button" type="button" onClick={() => inputRef.current?.click()}>{photo ? 'Choose another photo' : 'Upload a kitchen photo'} <span>＋</span></button>{photo && <button className="photo-reset" type="button" onClick={() => { setPhoto(''); if (inputRef.current) inputRef.current.value = ''; }}>Remove photo</button>}</div></div>
    <div className={`photo-preview-stage${photo ? ' has-photo' : ''}`} onClick={placeHardware} role={photo ? 'button' : undefined} tabIndex={photo ? 0 : undefined} onKeyDown={event => { if (photo && (event.key === 'Enter' || event.key === ' ')) setPlacement({ x: 50, y: 50 }); }}>
      {photo ? <><img className="uploaded-kitchen" src={photo} alt="Your uploaded kitchen"/><span className={`photo-hardware${isKnob ? ' knob' : ''}${horizontal ? ' horizontal' : ''}`} style={{ left: `${placement.x}%`, top: `${placement.y}%`, '--hardware-color': finishColor }} aria-label={`${product.name} preview`}><i/><b>{product.name} · {finish}</b></span><span className="photo-place-hint">Click to reposition the sample</span></> : <div className="photo-empty"><span className="photo-empty-icon">＋</span><strong>Bring your kitchen into the preview</strong><small>Select a JPG, PNG, or WEBP photo. Landscape photos work best.</small></div>}
    </div>
    {photo && <div className="photo-preview-footer"><span>Showing {product.name} in {finish}</span>{!isKnob && <button type="button" className="photo-reset" onClick={() => setHorizontal(value => !value)}>Rotate sample 90°</button>}</div>}
  </div>;
}

function KitchenVisualizer({ product, finish, onProduct, onFinish, onShop }) {
  const isKnob = product.type === 'knob';
  const changeProduct = id => { const next = products.find(item => item.id === id); if (next) onProduct(next); };
  return <section className="kitchen-visualizer" id="kitchen-visualizer">
    <div className="kitchen-heading"><div><div className="section-label">Picture handmade brass at home</div><h2>See it in the kitchen.</h2><p>Choose a handmade piece and finish, then see how it feels across three popular kitchen styles.</p></div><div className="visual-controls"><label htmlFor="visual-product">Your hardware</label><select id="visual-product" value={product.id} onChange={event => changeProduct(event.target.value)}>{products.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select><span className="visual-selected">Previewing: {product.name}</span></div></div>
    <div className="visual-finish-row"><span>Preview finish</span>{product.finishes.map(name => <button key={name} className={`visual-finish${finish === name ? ' active' : ''}`} onClick={() => onFinish(name)}><i className={`swatch ${({ Gold: 'gold', 'Antique Bronze': 'bronze', Gunmetal: 'gunmetal', Silver: 'gunmetal', Black: 'black' }[name] || 'bronze')}`}/>{name}</button>)}</div>
    <div className="kitchen-look-grid">{kitchenLooks.map(look => <article className="kitchen-look" key={look.id}><div className="kitchen-preview"><KitchenScene look={look} finish={finish} knob={isKnob}/></div><div className="kitchen-look-copy"><span className="kitchen-look-kicker">{look.id === 'navy' && isKnob ? 'A little more texture' : 'Kitchen look'}</span><h3>{look.name}</h3><p>{product.name} in {finish}. {look.note}.</p><button type="button" className="text-link kitchen-shop-look" onClick={() => onShop(product, finish)}>Shop this look <span>↗</span></button></div></article>)}</div>
    <KitchenPhotoPreview product={product} finish={finish}/>
    <p className="visual-note">A visual preview to help you explore the look. Final product dimensions, finish, and placement can vary.</p>
  </section>;
}

function FitFinder({ onAddPlan, notify }) {
  const [unit, setUnit] = useState('in');
  const [measurement, setMeasurement] = useState('');
  const [counts, setCounts] = useState({ doors: 0, drawers: 0, tall: 0 });
  const value = Number(measurement);
  const mm = unit === 'in' ? value * 25.4 : value;
  const nearest = Number.isFinite(mm) && mm > 0 ? sizeReferences.reduce((best, item) => Math.abs(item.mm - mm) < Math.abs(best.mm - mm) ? item : best) : null;
  const pieceCount = counts.doors + counts.drawers + counts.tall;
  const countLabel = [counts.doors && `${counts.doors} doors`, counts.drawers && `${counts.drawers} drawer fronts`, counts.tall && `${counts.tall} tall fronts`].filter(Boolean).join(' · ');
  const changeCount = (key, delta) => setCounts(current => ({ ...current, [key]: Math.max(0, Math.min(250, current[key] + delta)) }));
  const setPreset = preset => setMeasurement(unit === 'in' ? (preset / 25.4).toFixed(3) : String(preset));
  const addPlan = () => {
    if (!pieceCount) return notify('Add your cabinet and drawer counts first.');
    const spacing = nearest ? `Measured spacing: ${(mm / 25.4).toFixed(3)} in / ${mm.toFixed(1)} mm` : 'Hole spacing not measured yet';
    onAddPlan({ name: 'Kitchen size plan', finish: 'Room count', size: `${spacing} · ${counts.doors} doors · ${counts.drawers} drawer fronts · ${counts.tall} tall fronts`, qty: pieceCount, image: products[0].image, alt: 'Cabinet hardware room plan' });
  };
  return <section className="size-studio" id="size-finder">
    <div className="size-studio-head"><div><div className="section-label">The Sunhaven Fit Finder</div><h2>Get the fit right<br/>before you order.</h2><p>Replacing existing pulls? Start with the screw holes. Planning a new kitchen? Build a quick room list. Your measurements stay in inches and millimeters, side by side.</p><div className="size-promise"><span>01</span> Measure center to center <i>·</i> <span>02</span> Find a standard reference <i>·</i> <span>03</span> Plan your pieces</div></div>
      <div className="fit-card"><div className="fit-card-top"><div><div className="fit-step">01 / MATCH EXISTING HOLES</div><h3>What is the distance between screw-hole centers?</h3><p>Measure from the middle of one screw hole to the middle of the other. Pull length is a different measurement.</p></div><div className="fit-diagram" aria-hidden="true"><span className="fit-hole"/><span className="fit-rule"><i/><i/><i/><i/><i/></span><span className="fit-hole"/><span className="fit-dimension">CENTER TO CENTER</span></div></div>
        <div className="fit-entry"><label htmlFor="fitMeasure">Your hole spacing</label><div className="fit-input-row"><input id="fitMeasure" type="number" min="0.1" max="1000" step="any" inputMode="decimal" placeholder={unit === 'in' ? 'e.g. 3.75' : 'e.g. 96'} value={measurement} onChange={event => setMeasurement(event.target.value)}/><div className="unit-switch" role="group" aria-label="Measurement units"><button type="button" className={`unit-button${unit === 'in' ? ' active' : ''}`} onClick={() => setUnit('in')}>IN</button><button type="button" className={`unit-button${unit === 'mm' ? ' active' : ''}`} onClick={() => setUnit('mm')}>MM</button></div></div><div className="fit-input-hint">Measure to the nearest 1/16 in, or use millimeters.</div>
          <div className="fit-output" aria-live="polite"><span className="fit-output-icon">↔</span>{nearest ? <span><strong>{Math.abs(nearest.mm - mm) <= 1.5 ? 'Closest reference size' : 'Nearest common reference'}: {nearest.inch} / {nearest.mm} mm</strong><small>You entered {unit === 'in' ? `${value} in` : `${value} mm`} ({mm.toFixed(1)} mm / ${(mm / 25.4).toFixed(3)} in). Compare the exact product CTC before ordering.</small></span> : <span>Enter your measurement for a size match.</span>}</div>
          <div className="common-size-row"><span>Common references</span>{sizeReferences.slice(0, 6).map(item => <button type="button" key={item.mm} onClick={() => setPreset(item.mm)}>{item.mm === 76.2 ? '3 in' : `${item.mm} mm`}</button>)}</div>
        </div>
      </div>
    </div>
    <div className="room-planner"><div className="planner-intro"><div className="fit-step">03 / PLAN YOUR ROOM</div><h3>How many fronts are you updating?</h3><p>Count each cabinet door, drawer front, and tall appliance or pantry front. We’ll turn your room into a clean hardware checklist.</p></div>
      <div className="planner-controls">{[['doors','Cabinet doors','Usually one knob or pull each'],['drawers','Drawer fronts','Count each drawer face'],['tall','Tall / appliance fronts','Pantry and integrated appliances']].map(([key,label,hint]) => <div className="planner-counter" key={key}><span><b>{label}</b><small>{hint}</small></span><div className="stepper"><button type="button" aria-label={`Remove ${label}`} onClick={() => changeCount(key,-1)}>−</button><output>{counts[key]}</output><button type="button" aria-label={`Add ${label}`} onClick={() => changeCount(key,1)}>+</button></div></div>)}</div>
      <div className="planner-summary"><div><span className="fit-step">YOUR ROOM LIST</span><strong>{pieceCount} {pieceCount === 1 ? 'piece' : 'pieces'}</strong><small>{countLabel ? `${countLabel} · one piece per front as a starting estimate` : 'Add a few fronts above to start your list.'}</small></div><button className="button" type="button" onClick={addPlan}>Add room plan to list&nbsp; +</button></div>
    </div>
    <div className="fit-footnote">Size references help narrow your search. Always match the exact center-to-center measurement and fixing details shown on the individual product before ordering. Reference conversions from <a href="https://www.berensonhardware.com/support/center-to-center-conversion" target="_blank" rel="noreferrer">Berenson’s center-to-center chart</a>.</div>
  </section>;
}

function App() {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [productModal, setProductModal] = useState(null);
  const [modalFinish, setModalFinish] = useState('Antique Bronze');
  const [modalFit, setModalFit] = useState('');
  const [modalQty, setModalQty] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [cardFinishes, setCardFinishes] = useState({});
  const [visualProduct, setVisualProduct] = useState(products[0]);
  const [visualFinish, setVisualFinish] = useState(products[0].finishes[0]);
  const [toast, setToast] = useState('');
  const [finishNote, setFinishNote] = useState('');

  const notify = (message) => { setToast(message); window.clearTimeout(window.toastTimer); window.toastTimer = window.setTimeout(() => setToast(''), 2500); };
  const visibleProducts = useMemo(() => {
    const matches = products.filter(product => (filter === 'all' || product.type === filter) && (!query || `${product.name} ${product.collection} ${product.detail} ${product.type}`.toLowerCase().includes(query.toLowerCase())));
    if (sort === 'az') matches.sort((a,b) => a.name.localeCompare(b.name));
    if (sort === 'za') matches.sort((a,b) => b.name.localeCompare(a.name));
    return matches;
  }, [filter, query, sort]);
  const bagCount = bagItems.reduce((sum, item) => sum + item.qty, 0);
  const quoteBody = encodeURIComponent(bagItems.map(item => `${item.name} — ${item.finish} — ${item.size} — Qty ${item.qty}`).join('\n'));
  const quoteHref = `mailto:info@visioncabinethardware.com?subject=${encodeURIComponent('US product pricing request')}&body=${quoteBody}`;

  useEffect(() => {
    const close = event => { if (event.key === 'Escape') { setProductModal(null); setSearchOpen(false); setCartOpen(false); } };
    document.addEventListener('keydown', close);
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', close); document.body.style.overflow = ''; };
  }, [cartOpen]);

  const addBagItem = item => { setBagItems(current => [...current, item]); setCartOpen(true); notify('Added to your project list.'); };
  const openProduct = product => { setProductModal(product); setModalFinish(product.finishes[0]); setModalFit(''); setModalQty(1); };
  const shopPreviewedProduct = (product, finish) => { setProductModal(product); setModalFinish(finish); setModalFit(''); setModalQty(1); };
  const chooseVisualProduct = (product, finish) => { setVisualProduct(product); setVisualFinish(finish && product.finishes.includes(finish) ? finish : product.finishes[0]); };
  const previewProduct = (product, finish) => { chooseVisualProduct(product, finish); document.getElementById('kitchen-visualizer')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const addSelectedProduct = () => {
    if (!productModal) return;
    const fit = modalFit || (productModal.type === 'knob' ? 'Single-hole knob' : 'Need size guidance');
    addBagItem({ name: productModal.name, finish: modalFinish, size: fit, qty: Math.max(1, Number(modalQty) || 1), image: productModal.image, alt: productModal.alt });
    setProductModal(null);
  };
  const chooseCollection = id => { setFilter(id === 'cabinet' ? 'all' : id); setQuery(''); };
  const selectFilter = id => { setFilter(id); setQuery(''); };

  return <>
    <Header bagCount={bagCount} onSearch={() => setSearchOpen(true)} onBag={() => setCartOpen(true)}/>
    <main id="top">
      <section className="hero" aria-label="Featured collection"><div className="hero-frame"><div className="hero-photo"/><div className="hero-copy"><div className="eyebrow">Handmade solid brass. Thoughtful details.</div><h1>Hardware that<br/>makes the <em>room.</em></h1><p>Every piece is shaped and finished by hand in solid brass, bringing lasting character to the heart of your home.</p><div className="hero-ctas"><a className="button" href="#shop">Explore bestsellers <span>↗</span></a><a className="button button-light" href="#size-finder">Find your fit</a></div></div><div className="hero-index"><i/> 01 &nbsp; / &nbsp; 03</div></div></section>
      <section className="trustbar" aria-label="Product details">{[['✳','Handmade solid brass','Shaped and finished by hand'],['◌','Finishes with depth','Made to live beautifully'],['⌖','Details that matter','Thoughtful from every angle'],['⌂','Made for real homes','For kitchens and beyond']].map(([symbol,title,detail]) => <div className="trust" key={title}><span className="trust-ico">{symbol}</span><span><b>{title}</b><small>{detail}</small></span></div>)}</section>
      <section className="section" id="collections"><div className="section-top"><div><div className="section-label">Find your finishing touch</div><h2>Explore the collections</h2></div><p>From quiet and considered to confidently sculptural, discover the details that make a space feel like yours.</p></div><div className="collections">{collections.map(item => <a className="collection" href="#shop" key={item.id} onClick={() => chooseCollection(item.id)}><div className="collection-image"><img src={item.image} alt={item.alt} loading="lazy"/></div><div className="collection-caption"><strong>{item.title}</strong><span>↗</span></div></a>)}</div></section>
      <section className="editorial"><div className="editorial-image"><img src={`${vision}files/Style_Meets_Function_Finishes_for_Every_Space.webp?v=1779109222`} alt="Handmade brass cabinet hardware styled in a considered interior" loading="lazy"/></div><div className="editorial-copy"><div className="eyebrow">A detail worth noticing</div><h2>Small change.<br/>Whole new feeling.</h2><p>The right hardware has a way of bringing everything into focus. Tactile forms, warm finishes, and considered proportions—made to be reached for every day.</p><a className="button" href="#shop">Meet the bestsellers <span>↗</span></a></div></section>
      <section className="section bestsellers" id="shop"><div className="section-top"><div><div className="section-label">Hand-finished in solid brass</div><h2>Considered bestsellers</h2></div><div className="filters" role="group" aria-label="Filter products">{categories.map(item => <button key={item.id} className={`filter${filter === item.id ? ' active' : ''}`} onClick={() => selectFilter(item.id)}>{item.label}</button>)}</div></div>
        <div className="catalog-tools"><span className="catalog-count">{visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'} in the collection</span><select className="sort-select" aria-label="Sort products" value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Sort: Featured</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></div>
        <div className="products">{visibleProducts.map(product => <ProductCard key={product.id} product={product} finish={cardFinishes[product.id] || product.finishes[0]} onOpen={openProduct} onVisualize={previewProduct} onFinish={(id, name) => { setCardFinishes(current => ({ ...current, [id]: name })); notify(`${name} selected. Open details to add this style to your project list.`); }}/>)}</div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}><a className="text-link" href="#collections">Browse all categories <span>↗</span></a></div>
      </section>
      <KitchenVisualizer product={visualProduct} finish={visualFinish} onProduct={product => chooseVisualProduct(product)} onFinish={setVisualFinish} onShop={shopPreviewedProduct}/>
      <FitFinder onAddPlan={addBagItem} notify={notify}/>
      <section className="finish-section" id="finishes"><div className="finish-grid"><div className="finish-photo"><img src={`${vision}files/Style_Meets_Function_Finishes_for_Every_Space.webp?v=1779109222`} alt="Cabinet hardware finishes styled in an interior" loading="lazy" onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = products[0].image; }}/></div><div className="finish-copy"><div className="section-label">Choose the mood</div><h2>The finish makes it personal.</h2><p>Finishes change the feeling of a room. Go bright and golden, softly aged, or beautifully understated. Find the tone that feels at home with the materials you love.</p><div className="finish-list">{[['Gold','fgold'],['Antique bronze','fbronze'],['Gunmetal','fgun'],['Black','fblack']].map(([name, style]) => <button className="finish-option" key={name} onClick={() => { setFinishNote(name); notify(`${name} selected. Browse matching hardware in the collection.`); }}><i className={`finish-circle ${style}`}/>{name}</button>)}</div>{finishNote && <div className="fit-input-hint" aria-live="polite">Selected finish: {finishNote}</div>}<a className="text-link" href="#shop">Shop by finish <span>↗</span></a></div></div></section>
      <section className="story-strip" id="craft"><span className="section-label">Made by hand, for the details</span><h2>Made to be seen.<br/>Made to be touched.</h2><p>Every Sunhaven Brass piece is made by hand. The marks of the maker, the weight of solid brass, and the care in every finish make the everyday feel considered.</p><a className="text-link" href="https://www.visioncabinethardware.in/" target="_blank" rel="noreferrer">See how it is made <span>↗</span></a></section>
      <section className="craft">{[['✳','Handmade, always','Every piece is shaped and finished by hand in solid brass.'],['⌁','Designed to be lived with','Considered shapes, tactile details, and finishes that feel good in the hand.'],['◒','Details, made yours','Explore silhouettes and tones to bring a personal finish to every room.']].map(([symbol,title,detail]) => <div className="craft-item" key={title}><span className="craft-symbol">{symbol}</span><h3>{title}</h3><p>{detail}</p></div>)}</section>
      <section className="trade" id="trade"><div><div className="section-label">For designers, builders &amp; cabinetmakers</div><h2>Good projects start with good details.</h2><p>Working on a kitchen, a whole home, or a hospitality project? Talk with us about coordinating handmade brass hardware across your plans.</p></div><a className="button" href="mailto:info@visioncabinethardware.com?subject=Trade%20and%20project%20enquiry">Let’s talk about your project <span>↗</span></a></section>
    </main>
    <footer className="footer"><div className="footer-grid"><div className="footer-about"><a className="brand" href="#top"><span className="brandmark">S</span><span><span className="brand-name">SUNHAVEN BRASS</span><span className="brand-sub">HANDMADE SOLID BRASS</span></span></a><p>Handmade solid brass cabinet and architectural hardware, shaped with care for the everyday.</p></div><div className="footer-col"><h4>Explore</h4><a href="#collections">Collections</a><a href="#shop">Bestsellers</a><a href="#finishes">Finishes</a><a href="#craft">Our craft</a></div><div className="footer-col"><h4>Here to help</h4><a href="mailto:info@visioncabinethardware.com">Contact</a><a href="#craft">FAQs</a><a href="#trade">Shipping information</a><a href="#trade">Returns</a></div><div className="newsletter"><h4>A note from Sunhaven Brass</h4><p>New collections, considered spaces, and details worth saving.</p><form className="newsletter-form" onSubmit={event => { event.preventDefault(); notify('Thanks for your interest.'); }}><input type="email" required placeholder="Your email address" aria-label="Your email address"/><button aria-label="Sign up">↗</button></form></div></div><div className="footer-bottom"><span>© 2026 SUNHAVEN BRASS</span><span>UNITED STATES &nbsp;·&nbsp; USD $</span></div></footer>

    {searchOpen && <div className="modal-backdrop open" onMouseDown={event => event.target === event.currentTarget && setSearchOpen(false)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="searchTitle"><button className="modal-close" aria-label="Close search" onClick={() => setSearchOpen(false)}>×</button><h3 id="searchTitle">Find your finishing touch.</h3><p>Search by collection, finish, or product style.</p><form className="modal-search" onSubmit={event => { event.preventDefault(); setFilter('all'); setSearchOpen(false); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }}><input type="search" autoFocus placeholder="Try ‘knurled brass pull’" aria-label="Search catalog" value={query} onChange={event => setQuery(event.target.value)}/><button className="button">Search&nbsp; ↗</button></form></div></div>}

    {productModal && <div className="modal-backdrop open" onMouseDown={event => event.target === event.currentTarget && setProductModal(null)}><div className="modal quick-modal" role="dialog" aria-modal="true" aria-labelledby="quickName"><div className="quick-image"><img src={productModal.image} alt={productModal.alt}/></div><div className="quick-info"><button className="modal-close" aria-label="Close details" onClick={() => setProductModal(null)}>×</button><div className="section-label">{productModal.collection}</div><h3 id="quickName">{productModal.name}</h3><div className="quick-price">Choose a finish &amp; share the fit</div><p className="price-note">Handmade in solid brass, with a considered finish on every piece.</p><p className="price-note">We confirm U.S. pricing, shipping, and availability before you order.</p>{verifiedDimensions[productModal.id] && <div className="quick-dimension-block"><div className="quick-label">Verified product dimensions</div><div className="quick-dimension-options">{verifiedDimensions[productModal.id].map(size => <button type="button" key={size.name} className={`quick-option${modalFit === dimensionOptionLabel(size) ? ' active' : ''}`} onClick={() => setModalFit(dimensionOptionLabel(size))}><strong>{size.name}</strong><span>{size.ctcIn} in / {size.ctcMm} mm CTC</span><small>{size.lengthIn} in / {size.lengthMm} mm overall{size.widthMm ? ` · ${size.widthMm} mm wide` : ''}</small></button>)}</div></div>}<div className="quick-label">Finish</div><div className="quick-options">{productModal.finishes.map(name => <button key={name} className={`quick-option${modalFinish === name ? ' active' : ''}`} onClick={() => setModalFinish(name)}>{name}</button>)}</div>{!verifiedDimensions[productModal.id] && <><div className="quick-label">{productModal.type === 'knob' ? 'Mounting style' : productModal.type === 'door' ? 'Door application' : 'Approximate center-to-center preference'}</div><div className="quick-options">{(productModal.type === 'knob' ? ['Single-hole knob','Need size guidance'] : productModal.type === 'door' ? ['Single handle','Pair of handles','Need application guidance'] : productModal.type === 'appliance' ? ['Under 8 in / 203 mm','8–18 in / 203–457 mm','Over 18 in / 457 mm','Need size guidance'] : ['Under 4 in / 102 mm','4–8 in / 102–203 mm','Over 8 in / 203 mm','Not replacing existing holes']).map(value => <button key={value} className={`quick-option${modalFit === value ? ' active' : ''}`} onClick={() => setModalFit(value)}>{value}</button>)}</div></>}<div className="quick-actions"><input type="number" min="1" max="999" value={modalQty} aria-label="Quantity" onChange={event => setModalQty(event.target.value)}/><button className="button" onClick={addSelectedProduct}>Add to project list&nbsp; +</button></div></div></div></div>}

    <div className={`cart-scrim${cartOpen ? ' open' : ''}`} onClick={() => setCartOpen(false)}/><aside className={`cart-panel${cartOpen ? ' open' : ''}`} aria-label="Project list" aria-modal="true"><div className="cart-head"><h3>Your project list</h3><button className="icon-btn" aria-label="Close list" onClick={() => setCartOpen(false)}>×</button></div><div className="cart-items">{bagItems.length ? bagItems.map((item,index) => <div className="cart-row" key={`${item.name}-${index}`}><img src={item.image} alt={item.alt}/><div><strong>{item.name}</strong><small>{item.finish} · {item.size} · Qty {item.qty}</small><button onClick={() => setBagItems(current => current.filter((_,i) => i !== index))}>Remove</button></div></div>) : <div className="cart-empty">Your project list is waiting for a few good details.</div>}</div><div className="cart-footer"><p>Send your selection list to request U.S. pricing, shipping, lead time, and finish availability for your project.</p><a className="button" href={quoteHref}>Request pricing&nbsp; ↗</a></div></aside>
    {toast && <div className="toast show" role="status" aria-live="polite">{toast}</div>}
  </>;
}

export default App;
