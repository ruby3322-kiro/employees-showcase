// 生成100名员工数据
function generateEmployees() {
    const firstNames = ['张', '李', '王', '刘', '陈', '杨', '黄', '赵', '吴', '周', '徐', '孙', '朱', '马', '胡', '郭', '何', '高', '林', '郑', '谢', '韩', '唐', '冯', '潘', '曾', '程', '戴', '夏', '钟', '邓', '侯', '宫', '江', '童', '颜', '苏', '卢', '姜', '蒋', '葛', '韦'];
    const lastNames = ['明', '华', '强', '军', '磊', '鹏', '俊', '涛', '杰', '伟', '超', '建', '祥', '辉', '宇', '峰', '龙', '飞', '云', '海', '光', '生', '成', '康', '力', '达', '新', '红', '美', '娜', '丽', '英', '芳', '燕', '静', '敏', '文', '艳', '琳', '娟', '婷', '欣', '晓', '媛', '思', '雨', '风', '莉', '蕾', '娅'];
    
    const employees = [];
    for (let i = 1; i <= 100; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        employees.push({
            id: i,
            name: firstName + lastName
        });
    }
    return employees;
}

// 生成占位符头像
function getPlaceholderAvatar(id) {
    const colors = ['FF6B6B', '4ECDC4', '45B7D1', 'FFA07A', '98D8C8', 'F7DC6F'];
    const color = colors[id % colors.length];
    const initial = String.fromCharCode(65 + (id % 26));
    return `https://ui-avatars.com/api/?name=${initial}${id}&background=${color}&color=fff&size=200&bold=true`;
}

// 创建员工卡片
function createEmployeeCard(employee) {
    return `
        <div class="employee-card">
            <div class="employee-avatar">
                <img src="${getPlaceholderAvatar(employee.id)}" alt="${employee.name}" loading="lazy">
            </div>
            <div class="employee-name">${employee.name}</div>
        </div>
    `;
}

// 创建照片卡片
function createPhotoCard(employee) {
    return `
        <div class="employee-photo">
            <img src="${getPlaceholderAvatar(employee.id)}" alt="${employee.name}" loading="lazy">
        </div>
    `;
}

// 初始化页面
function initPage() {
    const employees = generateEmployees();
    
    // 顶部显示前5个员工照片
    const topContainer = document.getElementById('topEmployees');
    if (topContainer) {
        for (let i = 0; i < 5; i++) {
            const card = document.createElement('div');
            card.innerHTML = createPhotoCard(employees[i]);
            setTimeout(() => {
                topContainer.appendChild(card.firstElementChild);
            }, i * 100);
        }
    }
    
    // 中间显示员工卡片（15个）
    const middleContainer = document.getElementById('middleEmployees');
    if (middleContainer) {
        for (let i = 5; i < 20; i++) {
            const card = document.createElement('div');
            card.innerHTML = createEmployeeCard(employees[i]);
            setTimeout(() => {
                middleContainer.appendChild(card.firstElementChild);
            }, i * 50);
        }
    }
    
    // 底部左侧照片
    const bottomLeftContainer = document.getElementById('bottomLeft');
    if (bottomLeftContainer) {
        const card = document.createElement('div');
        card.innerHTML = `<img src="${getPlaceholderAvatar(employees[20].id)}" alt="${employees[20].name}" style="width:100%; height:100%; object-fit:cover;">`;
        setTimeout(() => {
            bottomLeftContainer.appendChild(card.firstElementChild);
        }, 600);
    }
    
    // 底部右侧照片
    const bottomRightContainer = document.getElementById('bottomRight');
    if (bottomRightContainer) {
        const card = document.createElement('div');
        card.innerHTML = `<img src="${getPlaceholderAvatar(employees[21].id)}" alt="${employees[21].name}" style="width:100%; height:100%; object-fit:cover;">`;
        setTimeout(() => {
            bottomRightContainer.appendChild(card.firstElementChild);
        }, 700);
    }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}