(() => {
  const list = document.getElementById('company-list');
  const search = document.getElementById('company-search');
  const sort = document.getElementById('company-sort');
  const clear = document.getElementById('search-clear');
  const empty = document.getElementById('empty-results');
  const count = document.getElementById('result-count');
  const rows = Array.from(list.children);
  const collator = new Intl.Collator('ko');
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g, '');
  function update() {
    const query = normalize(search.value);
    rows.sort(sort.value === 'name'
      ? (a, b) => collator.compare(a.dataset.companyName, b.dataset.companyName)
      : (a, b) => Number(a.dataset.recentOrder) - Number(b.dataset.recentOrder));
    let visible = 0;
    rows.forEach(row => { row.hidden = !normalize(row.dataset.companyName).includes(query); if (!row.hidden) visible++; list.appendChild(row); });
    clear.hidden = !search.value;
    empty.hidden = visible !== 0;
    count.textContent = query ? `${visible}개 기업 검색됨` : `${visible}개 기업`;
  }
  function reset() { search.value = ''; update(); search.focus(); }
  search.addEventListener('input', update);
  search.addEventListener('keydown', event => { if (event.key === 'Escape') reset(); });
  document.querySelector('.filters').addEventListener('submit', event => { event.preventDefault(); update(); });
  sort.addEventListener('change', update);
  clear.addEventListener('click', reset);
  document.getElementById('reset-search').addEventListener('click', reset);
  update();
})();
