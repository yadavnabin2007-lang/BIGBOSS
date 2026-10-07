import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

ids_in_html = set(re.findall(r'id=["\']([^"\'\s]+)["\']', html))
ids_in_js = set(re.findall(r'getElementById\(["\']([^"\'\s]+)["\']\)', js))

missing = ids_in_js - ids_in_html
print('IDs referenced in JS but missing in HTML:', missing)

# Check functions called in HTML onclick vs defined in JS
onclick_fn_names = set(re.findall(r'onclick=["\']([a-zA-Z0-9_]+)\(', html))
js_fn_names = set(re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', js))

missing_fns = onclick_fn_names - js_fn_names
print('Functions called in onclick missing in JS:', missing_fns)
